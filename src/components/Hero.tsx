
import nail25 from "@/assets/gallery/nail-25.jpg";
export function Hero() {
  return (
    <section className="relative bg-gradient-blush pt-32 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Est. Astoria, Queens · 2024
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Your Beauty <em className="text-primary not-italic">Best</em>
            <br />
            <span className="italic text-accent">Friend.</span>
          </h1>
          <div className="mt-8 space-y-5 text-base lg:text-[17px] leading-relaxed text-muted-foreground max-w-xl">
            <p>
              Dss Nails &amp; Spa — The Best Nail Salon in New York City — a trusted destination for
              wellness-focused, professional nail care in Astoria, heart of Queens since 2024 ✨
            </p>
            <p>
              With a deep belief in self-care, we create a warm, inclusive space where beauty
              feels effortless, personal, and empowering.
            </p>
            <p>
              We specialize in professional gel manicures and nail art, including the Japanese
              Gel Manicure.
            </p>
            <p>
              Whether it's your go-to manicure or a moment of calm in a busy day, Dss is here
              to make you feel confident, cared for, and uniquely you.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:17186068808"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
            >
              Book an Appointment
            </a>
            <a
              href="https://ig.me/m/Dss.nailsastoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.2em] hover:border-foreground transition-colors"
            >
              DM on Instagram
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.2em] hover:border-foreground transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-primary/10 -z-10" />
          <img
            src={nail25}
            alt="Elegant almond-shaped nails with a soft nude pink ombre gradient"
            width={1024}
            height={1280}
            className="w-full h-[520px] md:h-[640px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-background px-6 py-4 shadow-sm hidden md:block">
            <p className="font-serif text-xl text-foreground">Est. 2024</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              in Astoria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
