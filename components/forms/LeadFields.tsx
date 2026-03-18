"use client";

import { type ReactNode } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

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
        {required ? <span className="text-brand.emerald"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cx(
          "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand.emerald focus:ring-2 focus:ring-brand.emerald/20",
          error ? "border-red-300" : "border-slate-200"
        )}
      />
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-600">
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
        {required ? <span className="text-brand.emerald"> *</span> : null}
      </span>
      <select
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cx(
          "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-brand.emerald focus:ring-2 focus:ring-brand.emerald/20",
          error ? "border-red-300" : "border-slate-200"
        )}
      >
        {children}
      </select>
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-600">
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
          "mt-2 w-full resize-y rounded-2xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand.emerald focus:ring-2 focus:ring-brand.emerald/20",
          error ? "border-red-300" : "border-slate-200"
        )}
      />
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-600">
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
      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <input
          name={name}
          type="checkbox"
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="mt-1 h-4 w-4 accent-brand.emerald"
        />
        <span className="text-xs leading-relaxed text-ink.soft">{label}</span>
      </label>
      {error ? (
        <span id={describedBy} className="mt-2 block text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
}

