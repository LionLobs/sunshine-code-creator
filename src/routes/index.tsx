import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Trophy, HeartPulse, Users, Target, Megaphone, Smartphone, Palette,
  Handshake, Shirt, Instagram, FileImage, Star, BadgeCheck, TrendingUp,
  Video, Award, Lock, ShieldCheck, MapPin, Heart, Volume2, Crown,
  Phone, Mail, ArrowRight, Sparkles, CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroTeam from "@/assets/hero-team.jpg";
import playerCelebrate from "@/assets/player-celebrate.jpg";
import actionImg from "@/assets/action.jpg";

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
  { icon: TrendingUp, title: "Fortalecimento da marca na região" },
  { icon: Users, title: "Divulgação para público jovem e esportivo" },
  { icon: Heart, title: "Associação com saúde, disciplina e performance" },
  { icon: Volume2, title: "Presença constante em eventos e campeonatos" },
  { icon: Crown, title: "Autoridade e reconhecimento da marca" },
];

const plans = [
  {
    tier: "Bronze",
    price: "500",
    accent: "from-amber-700 to-amber-500",
    medalColor: "text-amber-600",
    number: "01",
    intro: null,
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
    accent: "from-slate-400 to-slate-200",
    medalColor: "text-slate-300",
    number: "02",
    intro: "Bronze",
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
    accent: "from-yellow-500 to-yellow-300",
    medalColor: "text-yellow-400",
    number: "03",
    intro: "Prata",
    featured: true,
    benefits: [
      { icon: BadgeCheck, text: "Logo em destaque no uniforme oficial" },
      { icon: TrendingUp, text: "Maior visibilidade nas redes sociais" },
      { icon: Video, text: "Divulgação em vídeos e conteúdos do time" },
      { icon: Award, text: "Presença da marca em campeonatos e eventos" },
      { icon: Lock, text: "Exclusividade no segmento (opcional)" },
      { icon: ShieldCheck, text: "Parceria oficial Elite Florianópolis" },
    ],
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 30), { passive: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elite Voleibol" className="h-12 w-auto drop-shadow-[0_0_12px_oklch(0.7_0.2_300_/_0.5)]" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold tracking-wider">ELITE</div>
              <div className="text-xs text-accent tracking-[0.2em]">VOLEIBOL</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#porque" className="hover:text-foreground transition">Por que patrocinar</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
            Seja Parceiro <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroTeam} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              PROJETO OFICIAL — FLORIANÓPOLIS
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
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
              <a href="#planos" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
                Ver Planos de Patrocínio <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-7 py-3.5 font-semibold hover:bg-card transition">
                Falar com a equipe
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border border-primary/30">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img src={playerCelebrate} alt="Jogadora celebrando" className="w-full h-[640px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs tracking-[0.3em] text-accent mb-2">VOLEIBOL DE ALTO NÍVEL</div>
                <div className="text-2xl font-bold">Paixão. Garra. Resultado.</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl bg-card border border-border backdrop-blur-xl px-5 py-4 shadow-[var(--shadow-card)]">
              <div className="text-[10px] tracking-widest text-muted-foreground">SEDE OFICIAL</div>
              <div className="flex items-center gap-2 mt-1 font-semibold">
                <MapPin className="h-4 w-4 text-accent" /> Florianópolis — SC
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 text-7xl md:text-8xl font-black text-foreground/5 tracking-tighter select-none">01</div>
      </section>

      {/* Why sponsor */}
      <section id="porque" className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={playerCelebrate} alt="" className="h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.3em] text-accent mb-4">04 — A OPORTUNIDADE</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              POR QUE SUA EMPRESA
              <br />
              <span className="text-accent">DEVE PATROCINAR?</span>
            </h2>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title }, i) => (
              <div key={title} className="group flex items-start gap-5 rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/60 hover:bg-card transition-all">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-[10px] tracking-widest text-muted-foreground mb-1">RAZÃO 0{i + 1}</div>
                  <div className="text-lg font-semibold leading-snug">{title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 backdrop-blur p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex items-center gap-5">
              <Handshake className="h-12 w-12 text-accent shrink-0" />
              <div className="text-xl md:text-2xl font-bold leading-snug">
                MAIS QUE PATROCÍNIO, <span className="text-accent">UMA PARCERIA QUE GERA IMPACTO</span> E TRANSFORMA O FUTURO.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs tracking-[0.3em] text-accent mb-4">PLANOS DE PATROCÍNIO</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              ESCOLHA O <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NÍVEL</span> DA SUA PARCERIA
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Três caminhos para conectar sua marca ao esporte de alto nível. Cada plano inclui todos os benefícios do anterior.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`relative rounded-3xl border bg-card/70 backdrop-blur-xl p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-2 ${
                  plan.featured ? "border-accent/60 lg:scale-[1.03] shadow-[var(--shadow-glow)]" : "border-border hover:border-primary/50"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
                    MAIS COMPLETO
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} shadow-lg`}>
                      <Award className="h-7 w-7 text-background" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest text-muted-foreground">PATROCINADOR</div>
                      <div className="text-3xl font-black tracking-tight">{plan.tier.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="text-5xl font-black text-foreground/10 tracking-tighter">{plan.number}</div>
                </div>

                <div className="mt-8 rounded-2xl bg-background/60 border border-border px-5 py-4">
                  <div className="text-[10px] tracking-widest text-muted-foreground">INVESTIMENTO MENSAL</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-muted-foreground">R$</span>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>

                {plan.intro && (
                  <div className="mt-6 text-xs tracking-widest text-muted-foreground">
                    TODOS OS BENEFÍCIOS DO PLANO <span className="text-accent font-bold">{plan.intro.toUpperCase()}</span> <span className="text-accent">+</span>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {plan.benefits.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3 rounded-xl bg-background/40 border border-border/50 p-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="text-sm leading-snug pt-1">{text}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contato"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105"
                      : "border border-border bg-background/40 hover:bg-primary/20 hover:border-primary/50"
                  }`}
                >
                  Quero ser {plan.tier} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Action */}
      <section className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={actionImg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { value: "+50", label: "Atletas em formação" },
            { value: "100%", label: "Projeto oficial Prefeitura de Florianópolis" },
            { value: "365", label: "Dias de presença esportiva" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-8 text-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="relative py-28">
        <div className="absolute inset-0 -z-10">
          <img src={heroTeam} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-card via-background to-card backdrop-blur-xl p-10 md:p-16 relative overflow-hidden shadow-[var(--shadow-glow)]">
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative text-center">
              <img src={logo} alt="Elite Voleibol" className="mx-auto h-28 w-auto drop-shadow-[0_0_30px_oklch(0.7_0.2_300_/_0.7)]" />
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

              <div className="mt-10 inline-flex flex-col items-center gap-4">
                <div className="text-xs tracking-[0.3em] text-accent">VAMOS CONVERSAR?</div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a href="https://wa.me/5548999799850" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-3 hover:border-primary/60 hover:bg-card transition group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/40 group-hover:bg-primary/40 transition">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">WHATSAPP</div>
                      <div className="text-sm font-semibold">(48) 99979-9850</div>
                    </div>
                  </a>
                  <a href="https://instagram.com/elitefloripavoleibol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-3 hover:border-primary/60 hover:bg-card transition group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/40 group-hover:bg-primary/40 transition">
                      <Instagram className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">INSTAGRAM</div>
                      <div className="text-sm font-semibold">@elitefloripavoleibol</div>
                    </div>
                  </a>
                  <a href="mailto:elitefloripavoleibol@gmail.com" className="flex items-center gap-3 rounded-xl border border-border bg-card/70 backdrop-blur px-5 py-3 hover:border-primary/60 hover:bg-card transition group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/40 group-hover:bg-primary/40 transition">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] tracking-widest text-muted-foreground">E-MAIL</div>
                      <div className="text-sm font-semibold">elitefloripavoleibol@gmail.com</div>
                    </div>
                  </a>
                </div>

                <a
                  href="https://wa.me/5548999799850?text=Ol%C3%A1!%20Quero%20conhecer%20os%20planos%20de%20patroc%C3%ADnio%20do%20Elite%20Floripa%20Voleibol."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  QUERO FECHAR UM PATROCÍNIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Heart className="h-4 w-4 text-accent" />
            <span className="tracking-widest font-semibold text-foreground">ELITE FLORIANÓPOLIS — VOLEIBOL DE ALTO NÍVEL</span>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Elite Voleibol. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
