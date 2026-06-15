import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Instagram,
  Medal,
  Shield,
  Sparkles,
  Trophy,
} from "lucide-react";

import ogImage from "@/assets/hero-serve.png";
import bgImage from "@/assets/sub19-team.jpg";
import logo from "@/assets/logo.png";

const pacotes = [
  {
    name: "BRONZE",
    price: "R$ 250",
    period: "/mês",
    icon: Medal,
    accent: "from-amber-700 to-amber-500",
    border: "border-amber-700/40",
    highlight: false,
    perks: [
      "Logo da marca no site oficial",
      "Logo da marca no uniforme do time",
      "Menção em postagem mensal no Instagram",
      "Certificado oficial de apoiador",
    ],
  },
  {
    name: "PRATA",
    price: "R$ 500",
    period: "/mês",
    icon: Trophy,
    accent: "from-primary to-accent",
    border: "border-primary/60",
    highlight: true,
    perks: [
      "Todos os benefícios Bronze",
      "Logo da marca no uniforme oficial",
      "Bolsa esportiva personalizada com identidade do time",
      "Camisa oficial Elite Floripa com a marca do patrocinador",
      "Postagens quinzenais no Instagram",
      "Banner em treinos abertos",
    ],
  },
  {
    name: "OURO",
    price: "Sob consulta",
    period: "",
    icon: Crown,
    accent: "from-yellow-400 to-amber-500",
    border: "border-yellow-400/40",
    highlight: false,
    perks: [
      "Todos os benefícios Prata",
      "Proposta customizada: fornecimento de materiais, equipamentos ou serviços ao time",
      "Possibilidade de conversão em R$ 1.000 em dinheiro",
      "Destaque em entrevistas e mídia",
      "Conteúdo exclusivo da marca",
      "Participação em eventos do clube",
    ],
  },
];

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Patrocinadores — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Seja patrocinador do Elite Floripa. Pacotes Bronze, Prata, Ouro e Diamante para marcas que querem apoiar o voleibol masculino de base em Florianópolis.",
      },
      { property: "og:title", content: "Patrocine o Elite Floripa" },
      {
        property: "og:description",
        content:
          "Conheça nossos pacotes de patrocínio e associe sua marca à formação de atletas em Santa Catarina.",
      },
      { property: "og:image", content: ogImage },
    ],
  }),
  component: PatrocinadoresPage,
});

function PatrocinadoresPage() {
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
            <Link to="/patrocinadores" className="text-foreground font-semibold">
              Patrocinadores
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
            alt="Elite Floripa - patrocínio"
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
              SEJA PATROCINADOR OFICIAL
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              SUA MARCA
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                NO JOGO.
              </span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-xl text-foreground/85 leading-relaxed font-light">
              Associe sua empresa ao crescimento do voleibol masculino de base em Florianópolis.
              Visibilidade real, audiência engajada e impacto social na formação de novos atletas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pacotes"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                Ver pacotes <ArrowRight className="h-4 w-4" />
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
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative border-y border-border bg-background/60 backdrop-blur-xl py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Time oficial",
              desc: "Reconhecido pela Prefeitura de Florianópolis, com estrutura profissional.",
            },
            {
              icon: Crown,
              title: "Audiência qualificada",
              desc: "Famílias, atletas e comunidade esportiva de Santa Catarina.",
            },
            {
              icon: Trophy,
              title: "Impacto social",
              desc: "Formação de jovens nas categorias Sub-17, Sub-19 e Sub-21.",
            },
          ].map(({ icon: Icon, title, desc }) => (
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

      {/* PACOTES */}
      <section id="pacotes" className="relative py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
              PACOTES DE PATROCÍNIO
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              ESCOLHA SEU{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                NÍVEL.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light">
              Pacotes flexíveis para empresas de todos os portes. Personalizamos contrapartidas
              conforme o objetivo da sua marca.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {pacotes.map(({ name, price, period, icon: Icon, accent, border, highlight, perks }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-3xl border ${border} bg-card/60 backdrop-blur-xl p-7 flex flex-col ${
                  highlight ? "shadow-[var(--shadow-glow)] scale-[1.02]" : ""
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-[10px] font-black tracking-widest">
                    MAIS ESCOLHIDO
                  </div>
                )}
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-background" />
                </div>
                <div className="text-xs font-black tracking-[0.3em] text-muted-foreground">
                  {name}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className={`font-black tracking-tight ${price.startsWith("Sob") ? "text-2xl" : "text-3xl"}`}>
                    {price}
                  </span>
                  {period && <span className="text-sm text-muted-foreground">{period}</span>}
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://instagram.com/elite_floripa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold tracking-widest transition ${
                    highlight
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105"
                      : "border border-border bg-card/70 hover:border-primary/50"
                  }`}
                >
                  QUERO ESTE PACOTE <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
            VAMOS CONSTRUIR{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
              JUNTOS?
            </span>
          </h3>
          <p className="mt-5 text-muted-foreground font-light">
            Entre em contato e receba nossa apresentação completa de patrocínio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com/elite_floripa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
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
