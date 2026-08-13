import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Realça trechos entre ** ** com a cor dourada. */
export function Rich({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-gold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function Section({
  children,
  alt = false,
  id,
  className,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 sm:px-8 md:py-24",
        alt ? "bg-surface" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
      {children}
    </p>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("gold-rule h-px w-full opacity-50", className)} />;
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/35 bg-gold/5 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-premium sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CTAButton({
  children,
  microcopy,
  className,
}: {
  children: ReactNode;
  microcopy?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <a
        href="#precos"
        className="flex w-full items-center justify-center rounded-lg bg-gold px-6 py-4 text-center text-[14px] font-bold uppercase leading-tight tracking-[0.08em] text-primary-foreground shadow-gold transition-colors hover:bg-gold-light sm:text-[15px]"
      >
        {children}
      </a>
      {microcopy ? (
        <p className="mt-3 text-center text-[13px] text-subtle">{microcopy}</p>
      ) : null}
    </div>
  );
}
