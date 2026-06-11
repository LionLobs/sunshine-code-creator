import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Users, MapPin, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { heroBg, values } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Floripa — Voleibol Masculino de Base em Florianópolis" },
      {
        name: "description",
        content:
          "Equipe oficial de voleibol masculino em Florianópolis. Formação de atletas Sub-17, Sub-19 e Sub-21 para competições estaduais, regionais e nacionais.",
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
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pt-24 pb-16 overflow-hidden">
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
              Equipe de voleibol masculino em Florianópolis. Treinamos atletas das categorias{" "}
              <span className="text-accent font-semibold">Sub-17, Sub-19 e Sub-21</span> para competir
              no mais alto nível: estadual, regional e nacional.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                Quero treinar no Elite <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/categorias"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
              >
                Ver categorias
              </Link>
              <Link
                to="/patrocinadores"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur px-6 py-3.5 text-sm font-bold text-accent hover:bg-accent/20 transition"
              >
                Seja patrocinador
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
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
            { value: "Ter/Qui", label: "Dias de treino" },
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

      {/* VALUES PREVIEW */}
      <section className="relative py-24 md:py-32">
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
          <div className="mt-10">
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all"
            >
              Conheça o time <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
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
