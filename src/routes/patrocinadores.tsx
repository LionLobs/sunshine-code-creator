import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Crown, ArrowRight, Instagram, Mail, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { sponsorTiers, sponsorReasons, ballBg, logo } from "@/lib/site-data";

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title: "Patrocinadores — Apoie o Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Seja patrocinador do Elite Floripa Voleibol. Cotas Bronze, Prata e Ouro com presença no uniforme, redes sociais e ativações de marca em Florianópolis.",
      },
      { property: "og:title", content: "Patrocinadores — Elite Floripa" },
      {
        property: "og:description",
        content: "Associe sua marca a um projeto esportivo em crescimento em Florianópolis.",
      },
      { property: "og:image", content: ballBg },
    ],
  }),
  component: Patrocinadores,
});

function Patrocinadores() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ballBg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-accent mb-6">
            <Sparkles className="h-3 w-3" /> PATROCINE O ELITE
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            SUA MARCA
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent italic">
              EM QUADRA.
            </span>
          </h1>
          <p className="mt-8 text-base md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
            O Elite Floripa é um projeto esportivo em crescimento em Florianópolis. Buscamos
            parceiros que acreditem no poder do esporte como ferramenta de transformação — e
            queiram associar suas marcas a isso.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
            POR QUE PATROCINAR
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 max-w-3xl">
            Mais que visibilidade.{" "}
            <span className="text-accent italic">Propósito.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorReasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)] mb-5">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-lg font-black tracking-tight mb-2">{title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative py-16 md:py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 font-black">
              COTAS DE PATROCÍNIO
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Escolha como apoiar.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Três cotas pensadas pra encaixar no momento da sua marca. Pacotes personalizados também são possíveis — fale com a gente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorTiers.map(({ name, icon: Icon, price, benefits, highlight }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-[2rem] border p-8 backdrop-blur-xl shadow-xl flex flex-col ${
                  highlight
                    ? "border-primary/60 bg-gradient-to-br from-primary/15 via-card to-accent/15 lg:scale-105"
                    : "border-border bg-card/60"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-black tracking-widest text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Crown className="h-3 w-3" /> MAIS PROCURADA
                  </div>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-tight">{name}</div>
                    <div className="text-[10px] tracking-[0.3em] text-accent font-bold uppercase">
                      {price}
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                    highlight
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105"
                      : "border border-border hover:border-primary/60 hover:bg-card"
                  }`}
                >
                  Quero esta cota <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-[3rem] border border-primary/30 bg-gradient-to-br from-card/80 via-background to-card/80 backdrop-blur-3xl p-10 md:p-16 overflow-hidden shadow-2xl text-center">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
            <img
              src={logo}
              alt="Elite Floripa"
              className="mx-auto h-20 w-auto drop-shadow-[0_0_40px_oklch(0.7_0.2_300_/_0.6)] mb-8 relative"
            />
            <h2 className="relative text-3xl md:text-5xl font-black tracking-tighter">
              Vamos crescer <span className="text-accent italic">juntos</span>?
            </h2>
            <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
              Envie uma mensagem e nossa equipe retorna com a apresentação completa do projeto e
              opções personalizadas pra sua marca.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:contato@elitefloripa.com.br?subject=Patroc%C3%ADnio%20Elite%20Floripa"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4" /> Enviar proposta
              </a>
              <a
                href="https://instagram.com/elite_floripa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-bold hover:bg-card hover:border-primary/50 transition"
              >
                <Instagram className="h-4 w-4" /> Falar pelo Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
