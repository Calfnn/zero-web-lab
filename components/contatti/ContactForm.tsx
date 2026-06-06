"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

type Status = "idle" | "loading" | "success";

// Floating-label input with bottom-border-only style.
function FloatingInput({
  id,
  label,
  type = "text",
  textarea = false,
  value,
  onChange,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const shared =
    "peer w-full border-b border-ink/20 bg-transparent pb-2 pt-6 text-ink outline-none transition-colors focus:border-accent placeholder-transparent";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          placeholder={label}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-1 text-xs uppercase tracking-wide text-muted transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-accent"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate an async submit (no backend wired up).
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1600);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <FloatingInput id="name" label="Nome" value={form.name} onChange={set("name")} />
      <FloatingInput
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={set("email")}
      />

      <div className="relative">
        <label
          htmlFor="service"
          className="mb-2 block text-xs uppercase tracking-wide text-muted"
        >
          Servizio
        </label>
        <select
          id="service"
          required
          value={form.service}
          onChange={(e) => set("service")(e.target.value)}
          className="w-full border-b border-ink/20 bg-transparent pb-2 pt-1 text-ink outline-none transition-colors focus:border-accent"
        >
          <option value="" disabled className="bg-surface">
            Seleziona un servizio
          </option>
          {services.map((s) => (
            <option key={s.title} value={s.title} className="bg-surface">
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <FloatingInput
        id="message"
        label="Messaggio"
        textarea
        value={form.message}
        onChange={set("message")}
      />

      <button
        type="submit"
        disabled={status !== "idle"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "idle" && <>Invia messaggio →</>}
        {status === "loading" && (
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block h-4 w-4 rounded-full border-2 border-ink border-t-transparent"
            />
            Invio...
          </span>
        )}
        {status === "success" && <>✓ Messaggio inviato!</>}
      </button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-accent"
        >
          Grazie! Ti risponderemo entro 24 ore.
        </motion.p>
      )}
    </form>
  );
}
