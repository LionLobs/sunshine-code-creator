import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { teamBg, values } from "@/lib/site-data";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Time — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Time oficial de voleibol masculino de Florianópolis, reconhecido pela Prefeitura. Formação técnica e humana em Sub-17, Sub-19 e Sub-21.",
      },
      { property: "og:title", content: "O Time — Elite Floripa Voleibol" },
      { property: "og:description", content: "Mais que um time. Uma família." },
      { property: "og:image", content: teamBg },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative pt-40 pb-20 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={teamBg} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            O TIME
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            MAIS QUE UM TIME.
            <br />
            <span className="text-accent italic">UMA FAMÍLIA.</span>
          </h1>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed font-light">
          <p>
            O <span className="text-foreground font-semibold">Elite Floripa</span> é uma equipe
            oficial de voleibol masculino de base, sediada em Florianópolis e reconhecida pela
            Prefeitura. Fundado em 2024, formamos atletas e pessoas em três categorias:{" "}
            <span className="text-accent font-semibold">Sub-17, Sub-19 e Sub-21</span>.
          </p>
          <p>
            Trabalhamos com metodologia profissional, treinos às{" "}
            <span className="text-foreground font-semibold">terças e quintas</span>, estrutura
            completa e cobrança real — porque acreditamos que disciplina e amor pelo esporte
            caminham juntos.
          </p>
          <p>
            Atuamos em campeonatos estaduais, regionais e nacionais — sempre representando
            Florianópolis com orgulho.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            NOSSOS PILARES
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-6 hover:border-primary/60 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-base font-black tracking-tight">{title}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-accent/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Quote className="h-16 w-16 text-primary/15 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-black italic leading-tight text-foreground/90">
            "NOSSO OBJETIVO NÃO É APENAS VENCER JOGOS, MAS FORMAR CIDADÃOS QUE ENTENDEM O VALOR DA
            DISCIPLINA, DO RESPEITO E DO TRABALHO EM EQUIPE."
          </h2>
          <div className="mt-8 text-sm font-black tracking-widest text-accent uppercase">
            Comissão Técnica
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap gap-4 justify-center">
          <Link
            to="/categorias"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            Ver categorias <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
          >
            Falar com o time
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
