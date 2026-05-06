import { Instagram, Facebook } from "lucide-react";
import { useState } from "react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7.05a4.85 4.85 0 0 1-1.84-.36z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="footer" className="bg-foreground text-background pt-24 pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pb-20 border-b border-background/15">
          <div>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">
              Stay in <em className="text-olive-light">touch</em>.
            </h3>
            <p className="mt-6 text-sm text-background/70 max-w-md leading-relaxed">
              Sign up to receive email updates, availability, special promotions, and more.
              We respect your privacy and will never share your information.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-10 py-16">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl">Dss <em className="text-olive-light">Nails &amp; Spa</em></p>
            <p className="mt-4 text-sm text-background/60 max-w-sm">
              Your beauty best friend in Astoria, heart of Queens. Wellness-focused nail care since 2024.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:customer.care@Dssnails.com"
                className="block text-sm text-background/80 underline-grow"
              >
                customer.care@Dssnails.com
              </a>
              <a
                href="tel:17186068808"
                className="block text-sm text-background/80 underline-grow"
              >
                718-606-8808 (Call to Book)
              </a>
              <a
                href="https://ig.me/m/Dss.nailsastoria"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-background/80 underline-grow"
              >
                DM on Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-olive-light transition-colors">Blog Stories</a></li>
              <li><a href="#" className="hover:text-olive-light transition-colors">Contact Dss</a></li>
              <li><a href="#" className="hover:text-olive-light transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-5">Legal</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-olive-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-olive-light transition-colors">Cancellation Policy</a></li>
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/Dss.nailsastoria?igsh=MWh2bm1rb210MnFzOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-olive-light transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@Dss.nails"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-olive-light transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/18LtgbSkct/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-olive-light transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-background/15 text-xs text-background/50 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Dss Nails &amp; Spa</p>
          <p>Made with care in Astoria</p>
        </div>
      </div>
    </footer>
  );
}
