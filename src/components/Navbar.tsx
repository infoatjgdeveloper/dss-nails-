import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, Facebook } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7.05a4.85 4.85 0 0 1-1.84-.36z" />
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "/#services", internal: false },
  { label: "About", href: "/about", internal: true },
  { label: "Gallery", href: "/gallery", internal: true },
  { label: "Press-On Nail", href: "/#gallery", internal: false },
  { label: "Dss App", href: "/#locations", internal: false },
  { label: "Contact", href: "/#footer", internal: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-tight text-foreground">
            Dss <span className="text-primary italic">Nails</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.internal ? (
                  <Link
                    to={l.href}
                    className="underline-grow text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="underline-grow text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4 ml-6">
            <a
              href="https://wa.me/17186068808?text=I%20want%20to%20get%20more%20info%20and%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
            >
              Book Now
            </a>
            <div className="flex items-center gap-4 pl-4 border-l border-border/50">
              <a
                href="https://www.instagram.com/Dss.nailsastoria?igsh=MWh2bm1rb210MnFzOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@Dss.nails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/18LtgbSkct/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-serif text-2xl">Dss <span className="text-primary italic">Nails</span></span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 px-6 pt-16">
          {navLinks.map((l, i) => (
            <li
              key={l.label}
              className={open ? "animate-fade-up" : ""}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {l.internal ? (
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li className="pt-6">
            <a
              href="https://wa.me/17186068808?text=I%20want%20to%20get%20more%20info%20and%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-10 py-4 bg-foreground text-background text-sm uppercase tracking-[0.25em]"
            >
              Book Now
            </a>
          </li>
          <li className="mt-4 flex items-center gap-8">
            <a
              href="https://www.instagram.com/Dss.nailsastoria?igsh=MWh2bm1rb210MnFzOA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@Dss.nails"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/share/18LtgbSkct/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
