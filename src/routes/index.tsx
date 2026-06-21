import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Wrench } from "lucide-react";

import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Em manutenção — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "O site do Elite Floripa está temporariamente fora do ar para manutenção. Voltamos em breve.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Elite Floripa — Em manutenção" },
      {
        property: "og:description",
        content: "Estamos fora do ar temporariamente. Voltamos em breve.",
      },
    ],
  }),
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_300_/_0.18),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.7_0.2_240_/_0.18),transparent_60%)]" />

      <main className="max-w-xl w-full text-center flex flex-col items-center gap-8">
        <img
          src={logo}
          alt="Elite Floripa"
          className="h-24 w-auto drop-shadow-[0_0_24px_oklch(0.7_0.2_300_/_0.6)]"
        />

        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-accent">
          <Wrench className="h-3 w-3" />
          EM MANUTENÇÃO
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
          VOLTAMOS
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent italic">
            EM BREVE.
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground font-light max-w-md">
          Estamos atualizando o site do Elite Floripa. Enquanto isso, acompanhe nossas novidades
          pelo Instagram.
        </p>

        <a
          href="https://instagram.com/elite_floripa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
        >
          <Instagram className="h-4 w-4" /> @elite_floripa
        </a>

        <div className="pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Elite Floripa · Florianópolis · SC
          <span className="mx-2 opacity-40">|</span>
          criado por{" "}
          <a
            href="https://dev.lionlobs.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-primary transition-colors"
          >
            LionLobs
          </a>
        </div>
      </main>
    </div>
  );
}
