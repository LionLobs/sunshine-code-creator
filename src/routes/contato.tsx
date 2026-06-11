import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Instagram, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { logo } from "@/lib/site-data";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Elite Floripa Voleibol" },
      {
        name: "description",
        content:
          "Fale com o Elite Floripa Voleibol. Treinos terças e quintas em Florianópolis. Instagram @elite_floripa.",
      },
      { property: "og:title", content: "Contato — Elite Floripa" },
      { property: "og:description", content: "Pronto pro próximo nível?" },
    ],
  }),
  component: Contato,
});

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

function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
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
              <h1 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                PRONTO PARA
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic">
                  O PRÓXIMO NÍVEL?
                </span>
              </h1>
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

      <SiteFooter />
    </div>
  );
}
