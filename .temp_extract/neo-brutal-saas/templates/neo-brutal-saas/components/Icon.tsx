import type { SVGProps } from "react";

type IconName = "arrow" | "bolt" | "globe" | "check" | "youtube" | "linkedin" | "discord" | "x";

export default function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const };
  if (name === "arrow") return <svg {...common} {...props}><path d="M7 17 17 7M9 7h8v8" /></svg>;
  if (name === "bolt") return <svg {...common} {...props}><path d="M13 2 5 14h6l-1 8 9-13h-6z" fill="currentColor" stroke="none"/></svg>;
  if (name === "globe") return <svg {...common} {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>;
  if (name === "check") return <svg {...common} {...props}><path d="m4 13 5 5L20 5"/></svg>;
  if (name === "youtube") return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.6 7.1a2.8 2.8 0 0 0-2-2C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.9a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.9.4-4.9s0-3.1-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.5 8.3H3V21h3.5V8.3ZM4.75 3A2 2 0 1 0 4.8 7a2 2 0 0 0-.05-4ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.8H9.1V21h3.5v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h3.6l.4-7.3Z"/></svg>;
  if (name === "discord") return <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.5 5.3A17 17 0 0 0 15.3 4l-.5 1a15 15 0 0 0-5.6 0l-.5-1a17 17 0 0 0-4.2 1.3C1.8 9.4 1 13.4 1.4 17.3A17 17 0 0 0 6.5 20l1.2-1.7-1.9-.9.5-.4c3.6 1.7 7.6 1.7 11.4 0l.5.4-1.9.9 1.2 1.7a17 17 0 0 0 5.1-2.7c.5-4.5-.9-8.4-3.1-12ZM8.4 15.2c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.2 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...props}><path d="M4 4l16 16M20 4 4 20"/></svg>;
}
