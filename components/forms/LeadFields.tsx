"use client";

import { type ReactNode } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const fieldBase =
  "mt-2 w-full rounded-2xl border border-brand-stroke bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink.soft/55 focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/15";

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink">
        {label}
        {required ? <span className="text-brand-gold"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cx(fieldBase, error ? "border-red-400/50" : "")}
      />
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink">
        {label}
        {required ? <span className="text-brand-gold"> *</span> : null}
      </span>
      <select
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cx(fieldBase, error ? "border-red-400/50" : "")}
      >
        {children}
      </select>
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
}) {
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink">{label}</span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cx(
          fieldBase,
          "resize-y",
          error ? "border-red-400/50" : ""
        )}
      />
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function ConsentField({
  name,
  label,
  error,
}: {
  name: string;
  label: string;
  error?: string;
}) {
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <div>
      <label className="flex items-start gap-3 rounded-2xl border border-brand-stroke bg-white/90 px-4 py-3">
        <input
          name={name}
          type="checkbox"
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="mt-1 h-4 w-4 rounded border-brand-stroke bg-white text-brand-gold accent-brand-gold"
        />
        <span className="text-xs leading-relaxed text-ink.soft">{label}</span>
      </label>
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </div>
  );
}
