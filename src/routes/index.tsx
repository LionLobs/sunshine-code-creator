import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Target,
  Shield,
  Flame,
  Crown,
  Calendar,
  Instagram,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Quote,
  Menu,
  X,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

import heroServeAsset from "@/assets/hero-serve.png.asset.json";
import sub17Asset from "@/assets/sub17-team.jpg.asset.json";
import sub19Asset from "@/assets/sub19-team.jpg.asset.json";
import sub21Asset from "@/assets/sub21-team.jpg.asset.json";

const logo = "/assets/logo.png";
const heroBg = heroServeAsset.url;
const sub17Bg = sub17Asset.url;
const sub19Bg = sub19Asset.url;
const sub21Bg = sub21Asset.url;
const teamBg = "/assets/photos/team-3.jpg";
const ballBg = "/assets/photos/spike.jpg";

const instaPhotos = [
  "/assets/photos/team-1.jpg",
  "/assets/photos/spike.jpg",
  "/assets/photos/team-2.jpg",
  "/assets/photos/block.jpg",
  "/assets/photos/huddle.jpg",
  "/assets/photos/action-1.jpg",
  "/assets/photos/group.jpg",
  "/assets/photos/team-4.jpg",
];

const categories = [
  {
    age: "SUB-17",
    desc: "A base que constrói o futuro. Atletas entre 15 e 17 anos em formação técnica e mental.",
    icon: Flame,
  },
  {
    age: "SUB-19",
    desc: "A geração de transição. Disputando campeonatos estaduais e regionais de alto nível.",
    icon: Shield,
  },
  {
    age: "SUB-21",
    desc: "A elite da base. Pré-profissional, preparando atletas para o cenário nacional.",
    icon: Crown,
  },
];

const values = [
  {
    icon: Trophy,
    title: "Alto Desempenho",
    desc: "Treinos às terças e quintas com metodologia profissional e cobrança real.",
  },
  {
    icon: Users,
    title: "Formação Humana",
    desc: "Disciplina, respeito e responsabilidade dentro e fora de quadra.",
  },
  {
    icon: Target,
    title: "Foco em Resultado",
    desc: "Cada temporada com metas claras — estaduais, regionais e nacionais.",
  },
  {
    icon: Shield,
    title: "Time Oficial",
    desc: "Reconhecido pela Prefeitura de Florianópolis.",
  },
];

const achievements = [
  { year: "2024", title: "Fundação do time Elite", place: "Florianópolis · SC" },
  { year: "2024", title: "Primeira temporada de treinos", place: "Categorias Sub-17 a Sub-21" },
  { year: "2025", title: "Estreia em competições estaduais", place: "Santa Catarina" },
  { year: "2026", title: "Temporada em andamento", place: "Estadual · Regional · Nacional" },
];

const sections = [
  { id: "sobre", label: "O Time" },
  { id: "categorias", label: "Categorias" },
  { id: "conquistas", label: "Conquistas" },
  { id: "contato", label: "Contato" },
];

const contactItems = [
  { icon: Calendar, label: "TREINOS", value: "Terças & Quintas", href: null as string | null },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    value: "@elite_floripa",
    href: "https://instagram.com/elite_floripa",
  },
  {
    icon: Mail,
    label: "E-MAIL",
    value: "contato@elitefloripa.com.br",
    href: "mailto:contato@elitefloripa.com.br",
  },
  { icon: MapPin, label: "LOCALIZAÇÃO", value: "Florianópolis, SC", href: null },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Floripa — Voleibol Masculino de Base em Florianópolis" },
      {
        name: "description",
        content:
          "Equipe oficial de voleibol masculino em Florianópolis. Formação de atletas Sub-17, Sub-19 e Sub-21. Treinos às terças e quintas.",
      },
      { property: "og:title", content: "Elite Floripa — Voleibol Masculino" },
      {
        property: "og:description",
        content: "Formando atletas em Florianópolis · Treinos terças e quintas.",
      },
      { property: "og:image", content: heroBg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Ambient />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end pt-24 pb-4 md:pb-16 overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Elite Floripa em quadra"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              TIME OFICIAL · FLORIANÓPOLIS · SC
            </div>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              FORMANDO
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                ATLETAS.
              </span>
            </h1>
            <p className="mt-4 md:mt-8 max-w-xl text-sm md:text-xl text-foreground/85 leading-relaxed font-light">
              Equipe de voleibol masculino em Florianópolis. Treinamos atletas das categorias{" "}
              <span className="text-accent font-semibold">Sub-17, Sub-19 e Sub-21</span> para competir
              no mais alto nível: estadual, regional e nacional.
            </p>
            <div className="mt-5 md:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                Quero treinar no Elite <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
              >
                Ver categorias
              </a>
            </div>
            <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" />
                <span>Desde 2024</span>
              </div>
              <div className="h-3 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span>3 categorias de base</span>
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

      {/* STATS */}
      <section className="relative border-y border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "2024", label: "Fundação do time" },
            { value: "3", label: "Categorias de base" },
            { value: "Ter & Qui", label: "Dias de treino" },
            { value: "SC", label: "Base em Florianópolis" },
          ].map((s) => (
            <div key={s.label} className="text-center py-8 px-2">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-br from-primary-foreground via-accent to-primary bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-[10px] md:text-xs text-muted-foreground tracking-[0.25em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE / VALUES */}
      <section id="sobre" className="relative py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
              O QUE NOS MOVE
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              MAIS QUE VÔLEI.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                UM PROJETO.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light">
              O Elite Floripa é um time oficial de voleibol masculino de base, fundado em 2024 e
              reconhecido pela Prefeitura de Florianópolis. Formamos atletas e pessoas com
              metodologia profissional, disciplina e cobrança real.
            </p>
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
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-base font-black tracking-tight">{title}</div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="relative py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
              CATEGORIAS
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              TRÊS GERAÇÕES.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                UMA MESMA QUADRA.
              </span>
            </h2>
          </div>
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
                    src={i === 0 ? sub17Bg : i === 1 ? sub19Bg : sub21Bg}
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

      {/* QUOTE */}
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

      {/* CONQUISTAS */}
      <section id="conquistas" className="relative py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            CONQUISTAS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            HISTÓRICO DE <span className="text-accent italic">ELITE.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden bg-muted/20 py-8">
          <InfiniteMovingCards items={achievements} direction="right" speed="slow" />
          <div className="mt-4">
            <InfiniteMovingCards
              items={[...achievements].reverse()}
              direction="left"
              speed="normal"
            />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 mt-16">
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

      {/* INSTAGRAM */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            BASTIDORES
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">
            Acompanhe tudo no <span className="text-accent">Instagram</span>.
          </h2>
          <div className="relative space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
            {[
              { dir: "animate-[marquee_45s_linear_infinite]", set: instaPhotos.slice(0, 6) },
              { dir: "animate-[marquee_60s_linear_infinite_reverse]", set: instaPhotos.slice(0, 6).reverse() },
            ].map((row, r) => (
              <div key={r} className="flex gap-4 w-max will-change-transform" style={{ animation: undefined }}>
                <div className={`flex gap-4 ${row.dir}`}>
                  {[...row.set, ...row.set, ...row.set].map((src, i) => (
                    <a
                      key={`${r}-${i}`}
                      href="https://instagram.com/elite_floripa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative h-44 w-44 md:h-56 md:w-56 shrink-0 overflow-hidden rounded-3xl border border-border/60 hover:border-primary/60 transition shadow-[var(--shadow-card)]"
                      style={{
                        transform: `translateY(${(i % 3) * 6 - 6}px) rotate(${((i % 5) - 2) * 0.8}deg)`,
                      }}
                    >
                      <img
                        src={src}
                        alt={`Elite Floripa ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/20" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
                      <Instagram className="absolute bottom-3 right-3 h-5 w-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-[3rem] border border-primary/30 bg-gradient-to-br from-card/80 via-background to-card/80 backdrop-blur-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse" />

            <div className="relative text-center">
              <img
                src={logo}
                alt="Elite Floripa"
                className="mx-auto h-20 w-auto drop-shadow-[0_0_50px_oklch(0.7_0.2_300_/_0.6)] mb-8"
              />
              <div className="text-[10px] tracking-[0.5em] text-accent font-black mb-4">
                FALE COM A GENTE
              </div>
              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                PRONTO PARA
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic">
                  O PRÓXIMO NÍVEL?
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Seja você um atleta querendo treinar com a gente ou uma marca buscando parceria, é
                só chamar.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href || "#"}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="group flex flex-col items-center p-6 rounded-[2rem] border border-border bg-background/20 hover:border-primary/50 hover:bg-background/40 transition-all duration-300 shadow-lg"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-black mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold truncate w-full px-2 text-center">
                      {item.value}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Elite Floripa Voleibol"
            className="h-10 w-auto drop-shadow-[0_0_18px_oklch(0.7_0.2_300_/_0.6)] group-hover:scale-110 transition-transform duration-300"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-black tracking-[0.18em] group-hover:text-primary transition-colors">
              ELITE FLORIPA
            </div>
            <div className="text-[9px] text-accent tracking-[0.35em] font-bold">
              VOLEIBOL MASCULINO
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground transition">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/elite_floripa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-[11px] font-bold tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            <Instagram className="h-4 w-4" /> @ELITE_FLORIPA
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-auto max-w-7xl px-6 mt-3 pb-2">
          <nav className="flex flex-col gap-1 rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground transition"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-auto opacity-90" />
          <div>
            <div className="tracking-[0.18em] font-black text-foreground text-xs">
              ELITE FLORIPA
            </div>
            <div className="text-[9px] tracking-[0.35em] text-accent">
              VOLEIBOL MASCULINO
            </div>
          </div>
        </div>
        <div className="text-[10px] tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} ELITE FLORIPA
          <br className="md:hidden" /> · TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
}

function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute top-0 left-1/4 h-[700px] w-[700px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
}
