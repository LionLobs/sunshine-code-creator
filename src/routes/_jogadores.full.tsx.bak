import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  Instagram,
  MapPin,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import ogImage from "@/assets/hero-serve.jpg";
import bgImage from "@/assets/sub21-team.jpg";
import logo from "@/assets/logo.png";

const FORM_URL =
  "https://docs.google.com/forms/d/1vIOr0Lpp28uTOa7FVG0EshLB-AUVIxJWrw5mbvEYmcM/viewform";

const requirements = [
  "Comprometimento com treinos às terças, quintas e sextas",
  "Idade entre 15 e 21 anos (Sub-17, Sub-19 ou Sub-21)",
  "Disposição para evoluir técnica, tática e mentalidade",
  "Respeito à metodologia e valores do Elite Floripa",
];

const differentials = [
  {
    icon: Shield,
    title: "Time oficial",
    desc: "Reconhecido pela Prefeitura de Florianópolis, com estrutura profissional.",
  },
  {
    icon: Trophy,
    title: "Alto rendimento",
    desc: "Metodologia focada em estaduais, regionais e competições nacionais.",
  },
  {
    icon: Users,
    title: "Formação completa",
    desc: "Desenvolvimento técnico, tático, físico e humano dos atletas.",
  },
];

export const Route = createFileRoute("/jogadores")({
  head: () => ({
    meta: [
      { title: "Quero Jogar no Elite — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Atleta, quer fazer parte do Elite Floripa? Preencha o formulário de inscrição e venha treinar com a gente nas categorias Sub-17, Sub-19 e Sub-21.",
      },
      { property: "og:title", content: "Quero Jogar no Elite Floripa" },
      {
        property: "og:description",
        content:
          "Inscreva-se para fazer parte do time de voleibol masculino de base em Florianópolis.",
      },
      { property: "og:image", content: ogImage },
    ],
  }),
  component: JogadoresPage,
});

function JogadoresPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border py-3">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Elite Floripa"
              className="h-10 w-auto drop-shadow-[0_0_18px_oklch(0.7_0.2_300_/_0.6)] group-hover:scale-110 transition-transform"
            />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-black tracking-[0.18em]">ELITE FLORIPA</div>
              <div className="text-[9px] text-accent tracking-[0.35em] font-bold">
                VOLEIBOL MASCULINO
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">
              Início
            </Link>
            <Link to="/" hash="sobre" className="hover:text-foreground transition">
              O Time
            </Link>
            <Link to="/" hash="categorias" className="hover:text-foreground transition">
              Categorias
            </Link>
            <Link to="/patrocinadores" className="hover:text-foreground transition">
              Patrocinadores
            </Link>
            <Link to="/jogadores" className="text-foreground font-semibold">
              Quero Jogar
            </Link>
          </nav>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-2 text-[11px] font-bold tracking-widest hover:border-primary/50 transition"
          >
            ← VOLTAR
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[80svh] flex items-center pt-28 pb-16 overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Elite Floripa - time Sub-21"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/60" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-accent mb-6">
              <Sparkles className="h-3 w-3" />
              SELEÇÃO DE ATLETAS
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              FAÇA PARTE
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                DO ELITE.
              </span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-xl text-foreground/85 leading-relaxed font-light">
              Você é atleta de voleibol e quer treinar com metodologia profissional? Inscreva-se
              no processo de seleção do Elite Floripa e venha construir seu futuro dentro de
              quadra.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                Preencher formulário <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/elite_floripa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
              >
                <Instagram className="h-4 w-4" /> Falar com o time
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span>Treinos ter, qui & sex</span>
              </div>
              <div className="h-3 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Florianópolis · SC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative border-y border-border bg-background/60 backdrop-blur-xl py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {differentials.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">{title}</div>
                <p className="text-sm text-muted-foreground mt-1 font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUISITOS / COMO FUNCIONA */}
      <section id="como-funciona" className="relative py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
              PROCESSO DE SELEÇÃO
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              O QUE VOCÊ PRECISA{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                PARA ENTRAR?
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light">
              O Elite Floripa busca atletas comprometidos que queiram crescer dentro de um projeto
              sério. O primeiro passo é preencher o formulário abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, i) => (
              <motion.div
                key={req}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6"
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Check className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="text-base font-medium text-foreground/90 leading-relaxed">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORMULÁRIO */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
            VAMOS CONSTRUIR{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
              JOGADORES?
            </span>
          </h3>
          <p className="mt-5 text-muted-foreground font-light max-w-2xl mx-auto">
            Preencha o formulário de inscrição. Nossa comissão técnica entrará em contato para os
            próximos passos do processo seletivo.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
            >
              <ArrowRight className="h-4 w-4" /> Quero fazer parte do Elite
            </a>
            <a
              href="https://instagram.com/elite_floripa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
            >
              <Instagram className="h-4 w-4" /> @elite_floripa
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-auto opacity-90" />
            <div className="tracking-[0.18em] font-black text-foreground text-xs">
              ELITE FLORIPA
            </div>
          </div>
          <div className="text-xs text-center md:text-right">
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
        </div>
      </footer>
    </div>
  );
}
