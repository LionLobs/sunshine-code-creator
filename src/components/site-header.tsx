import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { logo, navLinks } from "@/lib/site-data";

export function SiteHeader() {
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
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative">
            <img
              src={logo}
              alt="Elite Floripa Voleibol"
              className="h-10 w-auto drop-shadow-[0_0_18px_oklch(0.7_0.2_300_/_0.6)] group-hover:scale-110 transition-transform duration-300"
            />
            {scrolled && (
              <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
            )}
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-black tracking-[0.18em] group-hover:text-primary transition-colors">
              ELITE FLORIPA
            </div>
            <div className="text-[9px] text-accent tracking-[0.35em] font-bold">
              VOLEIBOL MASCULINO
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground font-bold" }}
              className="hover:text-foreground transition"
            >
              {l.label}
            </Link>
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
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-primary/15 text-foreground" }}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
