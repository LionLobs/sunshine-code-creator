import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Em manutenção — Elite Floripa Voleibol" },
      {
        name: "description",
        content: "Site temporariamente fora do ar. Voltamos em breve. Elite Floripa — Voleibol Masculino de Base em Florianópolis.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Em manutenção — Elite Floripa" },
      {
        property: "og:description",
        content: "Site temporariamente fora do ar. Voltamos em breve.",
      },
    ],
  }),
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <img
          src={logo}
          alt="Elite Floripa"
          className="h-20 w-auto mb-8 drop-shadow-[0_0_24px_oklch(0.7_0.2_300_/_0.5)]"
        />

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
          VOLTAMOS
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            EM BREVE.
          </span>
        </h1>

        <p className="text-muted-foreground font-light text-base md:text-lg max-w-md mb-8">
          Estamos realizando atualizações no site para entregar uma experiência ainda melhor. Fique
          ligado no Instagram para novidades.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <Link
            to="/preview"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            <Globe className="h-4 w-4" />
            Ver site
          </Link>
          <a
            href="https://instagram.com/elite_floripa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
          >
            <Instagram className="h-4 w-4" />
            @elite_floripa
          </a>
        </div>

        <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
          Elite Floripa · Florianópolis · SC
        </div>
      </div>

      {/* Footer signature */}
      <div className="absolute bottom-6 text-xs text-muted-foreground/60">
        criado por{" "}
        <a
          href="https://dev.lionlobs.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent/70 hover:text-accent transition-colors"
        >
          LionLobs
        </a>
      </div>
    </div>
  );
}
