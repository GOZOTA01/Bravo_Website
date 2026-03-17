/* ── Scroll-aware header ───────────────────────────────────── */
(function () {
  'use strict';

  const header = document.getElementById('site-header');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav toggle ──────────────────────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('main-nav');

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ── Animated counter ───────────────────────────────────── */
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el     = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          animateCounter(el, target, 1400);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: just set the value
    counters.forEach(function (el) {
      el.textContent = el.getAttribute('data-target');
    });
  }

  /* ── Contact form validation ────────────────────────────── */
  var form        = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      function setError(fieldId, errorId, message) {
        var field = document.getElementById(fieldId);
        var err   = document.getElementById(errorId);
        if (message) {
          field.classList.add('error');
          err.textContent = message;
          valid = false;
        } else {
          field.classList.remove('error');
          err.textContent = '';
        }
      }

      var name    = document.getElementById('name').value.trim();
      var email   = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      setError('name', 'name-error',
        !name ? 'Please enter your name.' : '');

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setError('email', 'email-error',
        !email      ? 'Please enter your email.' :
        !emailOk    ? 'Please enter a valid email address.' : '');

      setError('message', 'message-error',
        !message ? 'Please enter a message.' : '');

      if (valid) {
        // In a real app you'd POST to a backend here.
        form.reset();
        formSuccess.textContent = '✅ Thanks! We\'ll be in touch soon.';
        setTimeout(function () { formSuccess.textContent = ''; }, 5000);
      }
    });

    // Clear errors on input
    ['name', 'email', 'message'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', function () {
        this.classList.remove('error');
        var errEl = document.getElementById(id + '-error');
        if (errEl) errEl.textContent = '';
      });
    });
  }

  /* ── Footer year ────────────────────────────────────────── */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

}());
