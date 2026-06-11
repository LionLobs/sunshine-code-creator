import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, ArrowRight } from "lucide-react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { achievements, instaPhotos, teamBg } from "@/lib/site-data";

export const Route = createFileRoute("/conquistas")({
  head: () => ({
    meta: [
      { title: "Conquistas & Histórico — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Histórico do Elite Floripa Voleibol: fundação em 2024, temporadas e competições estaduais, regionais e nacionais.",
      },
      { property: "og:title", content: "Conquistas — Elite Floripa" },
      { property: "og:description", content: "Histórico de Elite." },
      { property: "og:image", content: teamBg },
    ],
  }),
  component: Conquistas,
});

function Conquistas() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative pt-40 pb-12 md:pt-48">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            CONQUISTAS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            HISTÓRICO DE <span className="text-accent italic">ELITE.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light max-w-2xl">
            Time jovem, fundado em 2024 — construindo história a cada temporada.
          </p>
        </div>
      </section>

      <section className="relative py-12 overflow-hidden bg-muted/20">
        <InfiniteMovingCards items={achievements} direction="right" speed="slow" />
        <div className="mt-4">
          <InfiniteMovingCards items={[...achievements].reverse()} direction="left" speed="normal" />
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ol className="relative border-l border-border/60 pl-8 space-y-10">
            {achievements.map((a) => (
              <li key={a.year + a.title} className="relative">
                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]" />
                <div className="text-xs tracking-[0.3em] text-accent font-black mb-1">
                  {a.year}
                </div>
                <div className="text-xl md:text-2xl font-black tracking-tight">{a.title}</div>
                <div className="text-sm text-muted-foreground mt-1">📍 {a.place}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            BASTIDORES
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">
            Acompanhe tudo no <span className="text-accent">Instagram</span>.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instaPhotos.slice(0, 8).map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/elite_floripa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border hover:border-primary/60 transition"
              >
                <img
                  src={src}
                  alt={`Elite Floripa ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Instagram className="absolute bottom-3 right-3 h-5 w-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
          <Link
            to="/patrocinadores"
            className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all"
          >
            Apoie o time como patrocinador <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
