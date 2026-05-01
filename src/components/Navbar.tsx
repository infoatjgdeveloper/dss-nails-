import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services", internal: false },
  { label: "About", href: "/about", internal: true },
  { label: "Gallery", href: "/gallery", internal: true },
  { label: "Press-On Nail", href: "/#gallery", internal: false },
  { label: "DSS App", href: "/#locations", internal: false },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-tight text-foreground">
            DSS <span className="text-primary italic">Nails</span>
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

          <a
            href="#footer"
            className="hidden lg:inline-flex items-center px-6 py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
          >
            Book Now
          </a>

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
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-serif text-2xl">DSS <span className="text-primary italic">Nails</span></span>
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
              href="/#footer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-10 py-4 bg-foreground text-background text-sm uppercase tracking-[0.25em]"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
