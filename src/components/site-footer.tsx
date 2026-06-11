import { Link } from "@tanstack/react-router";
import { logo, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur py-10 mt-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-auto opacity-90" />
          <div>
            <div className="tracking-[0.18em] font-black text-foreground text-xs">
              ELITE FLORIPA
            </div>
            <div className="text-[9px] tracking-[0.35em] text-accent">
              VOLEIBOL MASCULINO
            </div>
          </div>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-[10px] tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} ELITE FLORIPA
          <br className="md:hidden" /> · TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
}
