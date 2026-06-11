import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { categories, heroBg, teamBg, ballBg } from "@/lib/site-data";

export const Route = createFileRoute("/categorias")({
  head: () => ({
    meta: [
      { title: "Categorias Sub-17, Sub-19 e Sub-21 — Elite Floripa" },
      {
        name: "description",
        content:
          "Conheça as três categorias de base do Elite Floripa Voleibol: Sub-17, Sub-19 e Sub-21. Treinos terças e quintas em Florianópolis.",
      },
      { property: "og:title", content: "Categorias — Elite Floripa" },
      { property: "og:description", content: "Três gerações. Uma mesma quadra." },
      { property: "og:image", content: ballBg },
    ],
  }),
  component: Categorias,
});

function Categorias() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative pt-40 pb-12 md:pt-48">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            CATEGORIAS
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
            TRÊS GERAÇÕES.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
              UMA MESMA QUADRA.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light max-w-2xl">
            Cada categoria com treinos próprios, treinadores especializados e calendário de
            competições alinhado ao seu nível de desenvolvimento.
          </p>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map(({ age, desc, icon: Icon }, i) => (
              <motion.div
                key={age}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2rem] border border-border bg-card/40 backdrop-blur-xl overflow-hidden hover:border-primary/60 transition-all duration-500 shadow-xl"
              >
                <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img
                    src={i === 0 ? heroBg : i === 1 ? teamBg : ballBg}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
                </div>

                <div className="relative p-8 h-full flex flex-col min-h-[420px]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] group-hover:rotate-6 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-6xl font-black text-foreground/5 tracking-tighter group-hover:text-primary/10 transition-colors">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-4xl font-black tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">
                      {age}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-medium">
                      {desc}
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                        <Calendar className="h-3 w-3" /> Ter & Qui
                      </div>
                      <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <ChevronRight className="h-4 w-4 text-foreground group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Quer fazer parte do <span className="text-accent italic">Elite</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Treinos terças e quintas em Florianópolis. Entre em contato com a comissão técnica.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            Quero treinar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
