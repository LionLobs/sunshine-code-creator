import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  Target,
  Instagram,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Mail,
  Award,
  Flame,
  Shield,
  Crown,
  ChevronLeft,
  Quote,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { Button } from "@/components/ui/button";
const logo = "/assets/logo.png";
const heroBg = "/assets/photos/action-1.jpg";
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

export const Route = createFileRoute("/")({
  component: Index,
});

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
    desc: "Treinos diários, metodologia profissional e cobrança real.",
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
  { icon: Shield, title: "Time Oficial", desc: "Reconhecido pela Prefeitura de Florianópolis." },
];

const achievements = [
  { year: "2024", title: "Fundação do time Elite", place: "Florianópolis · SC" },
  { year: "2024", title: "Primeira temporada de treinos", place: "Categorias Sub-17 a Sub-21" },
  { year: "2025", title: "Estreia em competições estaduais", place: "Santa Catarina" },
  { year: "2026", title: "Temporada em andamento", place: "Estadual · Regional · Nacional" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">

      {/* Ambient global */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[700px] w-[700px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "py-6"}`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Elite Floripa Voleibol"
                className="h-10 w-auto drop-shadow-[0_0_18px_oklch(0.7_0.2_300_/_0.6)] group-hover:scale-110 transition-transform duration-300"
              />
              {scrolled && <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />}
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-black tracking-[0.18em] group-hover:text-primary transition-colors">ELITE FLORIPA</div>
              <div className="text-[9px] text-accent tracking-[0.35em] font-bold">VOLEIBOL MASCULINO</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">
              O Time
            </a>
            <a href="#categorias" className="hover:text-foreground transition">
              Categorias
            </a>
            <a href="#conquistas" className="hover:text-foreground transition">
              Conquistas
            </a>
            <a href="#instagram" className="hover:text-foreground transition">
              Instagram
            </a>
            <a href="#contato" className="hover:text-foreground transition">
              Contato
            </a>
          </nav>
          <a
            href="https://instagram.com/elite_floripa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-xs font-bold tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            <Instagram className="h-4 w-4" /> @ELITE_FLORIPA
          </a>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        id="top"
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-end pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt="Elite Floripa em quadra"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              TIME OFICIAL · FLORIANÓPOLIS · SC
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
              FORMANDO
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                ATLETAS.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-xl text-foreground/85 leading-relaxed font-light">
              Equipe de voleibol masculino em Florianópolis. Treinamos atletas das
              categorias{" "}
              <span className="text-accent font-semibold">Sub-17, Sub-19 e Sub-21</span> para
              competir no mais alto nível: estadual, regional e nacional.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" />
                <span>+15 títulos</span>
              </div>
              <div className="h-3 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span>+50 atletas ativos</span>
              </div>
              <div className="h-3 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Florianópolis · SC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-muted-foreground hover:text-accent transition"
          >
            <span>ROLE PARA EXPLORAR</span>
            <ChevronRight className="h-4 w-4 rotate-90 animate-bounce" />
          </a>
        </div>
      </motion.section>

      {/* STATS */}
      <section className="relative border-y border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "+50", label: "Atletas ativos" },
            { value: "3", label: "Categorias de base" },
            { value: "+15", label: "Títulos conquistados" },
            { value: "2018", label: "Fundação do time" },
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

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={teamBg}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
        </div>

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6">01 — O TIME</div>
            <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight">
              MAIS QUE UM TIME.
              <br />
              <span className="text-accent">UMA FAMÍLIA.</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-light">
            <p>
              O <span className="text-foreground font-semibold">Elite Floripa</span> é um time
              oficial de voleibol masculino de base, sediado em Florianópolis e reconhecido pela
              Prefeitura. Formamos atletas e pessoas em três categorias:{" "}
              <span className="text-accent font-semibold">Sub-17, Sub-19 e Sub-21</span>.
            </p>
            <p>
              Trabalhamos com metodologia profissional, treinos diários, estrutura completa e
              cobrança real — porque acreditamos que disciplina e amor pelo esporte caminham juntos.
            </p>
            <p>
              Atuamos em campeonatos estaduais, regionais e nacionais — sempre representando
              Florianópolis com orgulho.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">02 — CATEGORIAS</div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
              TRÊS GERAÇÕES.
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                UMA MESMA QUADRA.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light max-w-2xl">
              Cada categoria com treinos próprios, treinadores especializados e calendário de
              competições alinhado ao seu nível de desenvolvimento.
            </p>
          </motion.div>

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

                <div className="relative p-8 h-full flex flex-col min-h-[400px]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] group-hover:rotate-6 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-6xl font-black text-foreground/5 tracking-tighter group-hover:text-primary/10 transition-colors">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-4xl font-black tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">{age}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                        Treinos diários
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

      {/* INFINITE ACHIEVEMENTS */}
      <section id="conquistas" className="relative py-24 md:py-32 overflow-hidden bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">03 — CONQUISTAS</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">HISTÓRICO DE <span className="text-accent italic">ELITE.</span></h2>
          </motion.div>
        </div>
        <InfiniteMovingCards items={achievements} direction="right" speed="slow" />
        <div className="mt-4">
          <InfiniteMovingCards items={[...achievements].reverse()} direction="left" speed="normal" />
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={teamBg}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-background" />
        </div>

        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6">04 — REDES SOCIAIS</div>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
            ACOMPANHE TUDO
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              EM TEMPO REAL.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Bastidores, treinos, jogos e conquistas — tudo postado pela equipe oficial do Elite
            Floripa, todos os dias.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {instaPhotos.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/elite_floripa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border hover:border-primary/60 transition"
              >
                <img
                  src={src}
                  alt={`Elite Floripa Voleibol ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <Instagram className="absolute bottom-3 right-3 h-5 w-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>

          <a
            href="https://instagram.com/elite_floripa"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-4 rounded-full border border-primary/40 bg-gradient-to-r from-primary/20 via-card to-accent/20 backdrop-blur-xl px-8 py-5 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
              <Instagram className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <div className="text-[10px] tracking-[0.3em] text-accent font-bold">
                SIGA NO INSTAGRAM
              </div>
              <div className="text-xl md:text-2xl font-black tracking-tight group-hover:text-accent transition">
                @elite_floripa
              </div>
            </div>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS / QUOTE */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-accent/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="h-20 w-20 text-primary/10 absolute -top-10 -left-10" />
            <h2 className="text-2xl md:text-4xl font-black italic leading-tight text-foreground/90">
              "NOSSO OBJETIVO NÃO É APENAS VENCER JOGOS, MAS FORMAR CIDADÃOS QUE ENTENDEM O VALOR DA DISCIPLINA, DO RESPEITO E DO TRABALHO EM EQUIPE."
            </h2>
            <div className="mt-8 flex flex-col items-center">
              <div className="h-1 w-12 bg-primary mb-4 rounded-full" />
              <div className="text-sm font-black tracking-widest text-accent uppercase">Comissão Técnica</div>
              <div className="text-[10px] text-muted-foreground tracking-widest mt-1">ELITE FLORIPA VOLEIBOL</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] border border-primary/30 bg-gradient-to-br from-card/80 via-background to-card/80 backdrop-blur-3xl p-8 md:p-20 overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse" />

            <div className="relative text-center">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                src={logo}
                alt="Elite Floripa"
                className="mx-auto h-24 w-auto drop-shadow-[0_0_50px_oklch(0.7_0.2_300_/_0.6)] mb-10"
              />
              <div className="text-[10px] tracking-[0.5em] text-accent font-black mb-4">
                05 — FALE COM A GENTE
              </div>
              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
                PRONTO PARA
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic">
                  O PRÓXIMO NÍVEL?
                </span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-12">
                Seja você um atleta talentoso ou um parceiro querendo apoiar o esporte catarinense, sua jornada começa aqui.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Instagram, label: "INSTAGRAM", value: "@elite_floripa", href: "https://instagram.com/elite_floripa" },
                  { icon: Mail, label: "E-MAIL", value: "contato@elitefloripa.com.br", href: "mailto:contato@elitefloripa.com.br" },
                  { icon: MapPin, label: "LOCALIZAÇÃO", value: "Florianópolis, SC", href: null },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href || "#"}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="group flex flex-col items-center p-8 rounded-[2rem] border border-border bg-background/20 hover:border-primary/50 hover:bg-background/40 transition-all duration-300 shadow-lg"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-inherit" />
                    </div>
                    <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-black mb-1">{item.label}</div>
                    <div className="text-sm font-bold truncate w-full px-2 text-center">{item.value}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border bg-background/80 backdrop-blur py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-auto opacity-90" />
            <div>
              <div className="tracking-[0.18em] font-black text-foreground text-xs">
                ELITE FLORIPA
              </div>
              <div className="text-[9px] tracking-[0.35em] text-accent">VOLEIBOL MASCULINO</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="#sobre" className="hover:text-foreground transition">
              O Time
            </a>
            <a href="#categorias" className="hover:text-foreground transition">
              Categorias
            </a>
            <a href="#conquistas" className="hover:text-foreground transition">
              Conquistas
            </a>
            <a href="#contato" className="hover:text-foreground transition">
              Contato
            </a>
          </div>
          <div className="text-[10px] tracking-widest">
            © {new Date().getFullYear()} ELITE FLORIPA · TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </footer>
    </div>
  );
}
