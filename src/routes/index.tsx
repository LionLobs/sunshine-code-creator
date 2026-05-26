import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Trophy, HeartPulse, Users, Target, Megaphone, Smartphone, Palette,
  Handshake, Shirt, Instagram, FileImage, Star, BadgeCheck, TrendingUp,
  Video, Award, Lock, ShieldCheck, MapPin, Heart, Crown,
  Phone, Mail, ArrowRight, Sparkles, CheckCircle2, Quote, Calendar, Eye,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroTeam from "@/assets/hero-team.jpg";
import playerCelebrate from "@/assets/player-celebrate.jpg";
import actionImg from "@/assets/action.jpg";
import teamHug from "@/assets/team-hug.jpg";
import spike from "@/assets/spike.jpg";
import huddle from "@/assets/huddle.jpg";
import ball from "@/assets/ball.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const pillars = [
  { icon: Trophy, label: "Alto Desempenho" },
  { icon: HeartPulse, label: "Saúde e Disciplina" },
  { icon: Users, label: "Formação de Pessoas" },
  { icon: Target, label: "Foco em Resultados" },
];

const reasons = [
  { icon: TrendingUp, title: "Fortalecimento da marca", desc: "Sua empresa ganha visibilidade junto a um público engajado em toda a região da Grande Florianópolis." },
  { icon: Users, title: "Público jovem e esportivo", desc: "Conexão direta com famílias, atletas, estudantes e comunidades ativas no esporte." },
  { icon: Heart, title: "Saúde, disciplina e performance", desc: "Associe sua marca a valores positivos que inspiram e geram identificação imediata." },
  { icon: Megaphone, title: "Presença em campeonatos", desc: "Marca presente em jogos, eventos, treinos e bastidores do time durante toda a temporada." },
  { icon: Crown, title: "Autoridade e reconhecimento", desc: "Parceria com um projeto oficial reconhecido pela Prefeitura de Florianópolis." },
  { icon: ShieldCheck, title: "Impacto social mensurável", desc: "Apoio direto à formação de atletas e ao desenvolvimento esportivo da cidade." },
];

const plans = [
  {
    tier: "Bronze",
    price: "500",
    medalColor: "from-amber-700 via-amber-600 to-amber-500",
    glow: "shadow-[0_0_60px_-10px_rgba(217,119,6,0.35)]",
    number: "01",
    intro: null,
    badge: null,
    benefits: [
      { icon: Megaphone, text: "Logo nas redes sociais do time" },
      { icon: Smartphone, text: "Divulgação em stories durante campeonatos" },
      { icon: Palette, text: "Marca em artes de jogos e resultados" },
      { icon: Handshake, text: "Agradecimento oficial como parceiro" },
    ],
  },
  {
    tier: "Prata",
    price: "800",
    medalColor: "from-slate-300 via-slate-200 to-slate-400",
    glow: "shadow-[0_0_60px_-10px_rgba(203,213,225,0.35)]",
    number: "02",
    intro: "Bronze",
    badge: "POPULAR",
    benefits: [
      { icon: Shirt, text: "Logo na camisa de treino" },
      { icon: Instagram, text: "Divulgação fixa no Instagram do time" },
      { icon: FileImage, text: "Marca em banner oficial da equipe" },
      { icon: Star, text: "Participação em ações promocionais" },
    ],
  },
  {
    tier: "Ouro",
    price: "1.000",
    medalColor: "from-yellow-300 via-yellow-400 to-amber-500",
    glow: "shadow-[0_0_80px_-10px_rgba(250,204,21,0.45)]",
    number: "03",
    intro: "Prata",
    badge: "MAIS COMPLETO",
    featured: true,
    benefits: [
      { icon: BadgeCheck, text: "Logo em destaque no uniforme oficial" },
      { icon: TrendingUp, text: "Maior visibilidade nas redes sociais" },
      { icon: Video, text: "Divulgação em vídeos e conteúdos do time" },
      { icon: Award, text: "Presença em campeonatos e eventos" },
      { icon: Lock, text: "Exclusividade no segmento (opcional)" },
      { icon: ShieldCheck, text: "Parceria oficial Elite Florianópolis" },
    ],
  },
];

const testimonials = [
  {
    quote: "Patrocinar o Elite é estar lado a lado de um projeto sério, com resultado e impacto real na comunidade.",
    author: "Diretor Comercial",
    role: "Parceiro Local",
  },
  {
    quote: "A visibilidade que conquistamos junto ao time superou nossas expectativas em apenas 3 meses.",
    author: "Gerente de Marketing",
    role: "Marca Patrocinadora",
  },
];

// Decorative purple ribbon mirroring the brand visual style
function Ribbon({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id="ribbon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.24 300)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.3 0.14 295)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <polygon points="0,0 200,0 200,80 0,140" fill="url(#ribbon-grad)" />
      <polygon points="0,140 200,80 200,100 0,160" fill="oklch(0.78 0.18 305 / 0.5)" />
    </svg>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[700px] w-[700px] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Elite Voleibol" className="h-12 w-auto drop-shadow-[0_0_18px_oklch(0.7_0.2_300_/_0.6)]" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold tracking-wider">ELITE</div>
              <div className="text-[10px] text-accent tracking-[0.25em]">VOLEIBOL</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#porque" className="hover:text-foreground transition">Por que patrocinar</a>
            <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
            Seja Parceiro <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Sticky bottom CTA on mobile */}
      <div className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <a
          href="https://wa.me/5548999799850?text=Ol%C3%A1!%20Quero%20conhecer%20os%20planos%20de%20patroc%C3%ADnio%20do%20Elite%20Floripa%20Voleibol."
          target="_blank"
          rel="noopener noreferrer"
          className="m-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-4 font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
        >
          <Phone className="h-5 w-5" /> Quero ser Patrocinador
        </a>
      </div>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroTeam} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        {/* Brand ribbon - top left like the visual ID */}
        <Ribbon className="top-0 left-0 h-48 w-72 opacity-60" />

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              PROJETO OFICIAL — PREFEITURA DE FLORIANÓPOLIS
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
              ELITE FLORIPA
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                VOLEIBOL
              </span>
            </h1>
            <p className="mt-8 text-2xl md:text-3xl font-bold">
              Juntos, levamos o
              <br />
              <span className="text-accent">esporte mais longe.</span>
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Seja parceiro de um projeto oficial da Prefeitura de Florianópolis e associe sua marca a performance, disciplina, saúde e impacto social.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#planos" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
                Ver Planos de Patrocínio <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#porque" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-7 py-4 font-semibold hover:bg-card hover:border-primary/50 transition">
                <Eye className="h-4 w-4" /> Por que patrocinar?
              </a>
            </div>

            <div className="mt-14 flex sm:grid sm:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:overflow-visible">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="snap-start shrink-0 w-[42%] sm:w-auto flex flex-col items-start gap-2 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 group-hover:scale-110 transition-transform shadow-[0_8px_20px_-8px_oklch(0.5_0.2_300_/_0.5)]">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual right panel */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/40 to-accent/20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[280px] group">
                  <img src={playerCelebrate} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-accent">PAIXÃO</div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[200px] group">
                  <img src={ball} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-accent">FOCO</div>
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[200px] group">
                  <img src={teamHug} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-accent">UNIÃO</div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[280px] group">
                  <img src={spike} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest text-accent">GARRA</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card/95 border border-border backdrop-blur-xl px-5 py-4 shadow-[var(--shadow-card)] z-10">
              <div className="text-[10px] tracking-widest text-muted-foreground">SEDE OFICIAL</div>
              <div className="flex items-center gap-2 mt-1 font-semibold">
                <MapPin className="h-4 w-4 text-accent" /> Florianópolis — SC
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 text-8xl md:text-9xl font-black text-foreground/5 tracking-tighter select-none">01</div>
      </section>

      {/* STATS BAND */}
      <section className="relative py-16 border-y border-border bg-gradient-to-r from-card/50 via-background to-card/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "+50", label: "Atletas em formação" },
            { value: "100%", label: "Projeto Oficial" },
            { value: "365", label: "Dias de presença" },
            { value: "+10K", label: "Alcance mensal" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary-foreground via-accent to-primary bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SPONSOR */}
      <section id="porque" className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={playerCelebrate} alt="" className="h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <Ribbon className="top-10 right-0 h-40 w-60 opacity-40" flip />

        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] text-accent mb-4">04 — A OPORTUNIDADE</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              POR QUE SUA EMPRESA
              <br />
              <span className="text-accent">DEVE PATROCINAR?</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Patrocinar o Elite Voleibol é investir em visibilidade real, conexão com a comunidade e em um time que representa Florianópolis com excelência.
            </p>
          </div>

          <div className="mt-16 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-7 hover:border-primary/60 hover:bg-card hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-black text-foreground/10 tracking-tighter">0{i + 1}</div>
                  </div>
                  <div className="text-lg font-bold leading-snug">{title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 relative rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/25 via-accent/10 to-primary/25 backdrop-blur p-8 md:p-12 overflow-hidden shadow-[var(--shadow-glow)]">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
                <Handshake className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left text-xl md:text-3xl font-black leading-snug">
                MAIS QUE PATROCÍNIO, <span className="text-accent">UMA PARCERIA QUE GERA IMPACTO</span> E TRANSFORMA O FUTURO.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs tracking-[0.3em] text-accent mb-4">A NOSSA ESSÊNCIA</div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                VOLEIBOL DE
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ALTO NÍVEL</span>
              </h2>
            </div>
            <p className="md:text-right text-muted-foreground max-w-md text-lg">
              Cada treino, cada jogo, cada vitória — sua marca presente nos momentos que importam.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <div className="col-span-12 md:col-span-8 relative rounded-3xl overflow-hidden h-[400px] md:h-[480px] group border border-border shadow-[var(--shadow-card)]">
              <img src={huddle} alt="Time reunido" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs tracking-[0.3em] text-accent mb-2">PREPARAÇÃO</div>
                <div className="text-2xl md:text-3xl font-black">Estratégia e união antes de cada jogo</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 relative rounded-3xl overflow-hidden h-[400px] md:h-[480px] group border border-border shadow-[var(--shadow-card)]">
              <img src={spike} alt="Ataque" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs tracking-[0.3em] text-accent mb-2">EXECUÇÃO</div>
                <div className="text-xl md:text-2xl font-black">Técnica de elite</div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 relative rounded-3xl overflow-hidden h-[300px] group border border-border shadow-[var(--shadow-card)]">
              <img src={teamHug} alt="Comemoração" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-xs tracking-[0.3em] text-accent mb-1">VITÓRIA</div>
                <div className="text-base font-black">Celebração em equipe</div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 relative rounded-3xl overflow-hidden h-[300px] group border border-border shadow-[var(--shadow-card)]">
              <img src={actionImg} alt="Quadra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-xs tracking-[0.3em] text-accent mb-1">QUADRA</div>
                <div className="text-base font-black">Momentos decisivos</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 relative rounded-3xl overflow-hidden h-[300px] group border border-primary/40 bg-gradient-to-br from-primary/30 via-card to-accent/20 shadow-[var(--shadow-glow)] flex flex-col items-center justify-center p-6 text-center">
              <img src={logo} alt="Elite Voleibol" className="h-20 w-auto mx-auto drop-shadow-[0_0_25px_oklch(0.7_0.2_300_/_0.7)]" />
              <div className="mt-4 text-xs tracking-[0.3em] text-accent">DESDE A BASE</div>
              <div className="mt-1 text-xl font-black">Formando atletas e campeões</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={ball} alt="" className="h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs tracking-[0.3em] text-accent mb-4">PLANOS DE PATROCÍNIO</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              ESCOLHA O <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NÍVEL</span>
              <br />
              DA SUA PARCERIA
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Três caminhos para conectar sua marca ao esporte de alto nível. Cada plano inclui todos os benefícios do anterior.
            </p>
          </div>

          <div className="mt-16 flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-4 lg:pb-0 lg:mx-0 lg:px-0 lg:overflow-visible">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`snap-start shrink-0 w-[88%] sm:w-[70%] lg:w-auto relative rounded-3xl border bg-card/70 backdrop-blur-xl p-8 transition-all hover:-translate-y-2 group ${
                  plan.featured
                    ? `border-accent/60 lg:scale-[1.04] ${plan.glow}`
                    : `border-border hover:border-primary/50 ${plan.glow}`
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-bold tracking-widest text-primary-foreground ${
                    plan.featured ? "bg-gradient-to-r from-primary to-accent shadow-[var(--shadow-glow)]" : "bg-card border border-accent/50 text-accent"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.medalColor} shadow-2xl`}>
                      <Award className="h-8 w-8 text-background drop-shadow-lg" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex">
                        <div className={`h-3 w-2 bg-gradient-to-b ${plan.medalColor} skew-x-12`} />
                        <div className={`h-3 w-2 bg-gradient-to-b ${plan.medalColor} -skew-x-12`} />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest text-muted-foreground">PATROCINADOR</div>
                      <div className="text-3xl font-black tracking-tight">{plan.tier.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="text-5xl font-black text-foreground/10 tracking-tighter">{plan.number}</div>
                </div>

                <div className="mt-8 rounded-2xl bg-background/60 border border-border px-5 py-4 backdrop-blur">
                  <div className="text-[10px] tracking-widest text-muted-foreground">INVESTIMENTO MENSAL</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-muted-foreground">R$</span>
                    <span className="text-5xl font-black bg-gradient-to-br from-primary-foreground to-accent bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>

                {plan.intro && (
                  <div className="mt-6 flex items-center gap-2 text-xs tracking-widest text-muted-foreground">
                    TODOS OS BENEFÍCIOS DO PLANO <span className="text-accent font-bold">{plan.intro.toUpperCase()}</span>
                    <span className="text-accent text-lg">+</span>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {plan.benefits.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3 rounded-xl bg-background/40 border border-border/50 p-3 hover:border-primary/40 transition-colors">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="text-sm leading-snug pt-1">{text}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5548999799850?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${plan.tier}%20de%20patroc%C3%ADnio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105"
                      : "border border-border bg-background/40 hover:bg-primary/20 hover:border-primary/60 hover:scale-105"
                  }`}
                >
                  Quero ser {plan.tier} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <Calendar className="inline h-4 w-4 mr-1 text-accent" />
            Pacotes personalizados disponíveis sob consulta.
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-[0.3em] text-accent mb-4">CONFIANÇA</div>
            <h2 className="text-3xl md:text-5xl font-black">O que dizem nossos parceiros</h2>
          </div>
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-start shrink-0 w-[88%] md:w-auto relative rounded-3xl border border-border bg-card/70 backdrop-blur p-8 md:p-10 shadow-[var(--shadow-card)] overflow-hidden">
                <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/20" />
                <p className="text-lg md:text-xl leading-relaxed font-medium">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-xs text-muted-foreground tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contato" className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={teamHug} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <Ribbon className="bottom-0 left-0 h-40 w-60 opacity-40" />
        <Ribbon className="top-0 right-0 h-40 w-60 opacity-40" flip />

        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-[2rem] border border-primary/40 bg-gradient-to-br from-card via-background to-card backdrop-blur-xl p-10 md:p-16 overflow-hidden shadow-[var(--shadow-glow)]">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />

            <div className="relative text-center">
              <img src={logo} alt="Elite Voleibol" className="mx-auto h-32 w-auto drop-shadow-[0_0_40px_oklch(0.7_0.2_300_/_0.8)]" />
              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">
                SUA MARCA PODE IR
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                  MUITO MAIS LONGE
                </span>
                <br />
                COM A GENTE!
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Apoie o esporte, fortaleça sua marca e seja parte de um projeto que faz a diferença dentro e fora das quadras.
              </p>

              <div className="mt-10 flex flex-col items-center gap-6">
                <a
                  href="https://wa.me/5548999799850?text=Ol%C3%A1!%20Quero%20conhecer%20os%20planos%20de%20patroc%C3%ADnio%20do%20Elite%20Floripa%20Voleibol."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-10 py-5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
                >
                  <CheckCircle2 className="h-6 w-6" />
                  QUERO FECHAR UM PATROCÍNIO
                </a>

                <div className="text-xs tracking-[0.3em] text-accent mt-4">VAMOS CONVERSAR?</div>

                <div className="flex sm:grid sm:grid-cols-3 gap-3 w-full overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:overflow-visible">
                  <a href="https://wa.me/5548999799850" target="_blank" rel="noopener noreferrer" className="snap-start shrink-0 w-[78%] sm:w-auto flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-4 hover:border-primary/60 hover:bg-card hover:-translate-y-0.5 transition group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 group-hover:scale-110 transition">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">WHATSAPP</div>
                      <div className="text-sm font-semibold">(48) 99979-9850</div>
                    </div>
                  </a>
                  <a href="https://instagram.com/elitefloripavoleibol" target="_blank" rel="noopener noreferrer" className="snap-start shrink-0 w-[78%] sm:w-auto flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-4 hover:border-primary/60 hover:bg-card hover:-translate-y-0.5 transition group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 group-hover:scale-110 transition">
                      <Instagram className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">INSTAGRAM</div>
                      <div className="text-sm font-semibold">@elitefloripavoleibol</div>
                    </div>
                  </a>
                  <a href="mailto:elitefloripavoleibol@gmail.com" className="snap-start shrink-0 w-[78%] sm:w-auto flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-4 hover:border-primary/60 hover:bg-card hover:-translate-y-0.5 transition group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40 group-hover:scale-110 transition">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">E-MAIL</div>
                      <div className="text-xs font-semibold break-all">elitefloripavoleibol@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background/80 backdrop-blur py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-auto opacity-90" />
            <div>
              <div className="tracking-widest font-bold text-foreground text-xs">ELITE FLORIANÓPOLIS</div>
              <div className="text-[10px] tracking-widest text-accent">VOLEIBOL DE ALTO NÍVEL</div>
            </div>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Elite Voleibol. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
