import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-10 bg-gradient-soft">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 border border-primary/30 -z-10" />
          <img
            src={portrait}
            alt="Model holding hands gracefully showing manicured nails"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[480px] md:h-[640px] object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-foreground">
            "Our aim is to provide all guests with{" "}
            <em className="text-primary">impeccable services</em> through experiences that
            nurture the body, mind, &amp; spirit 🌱"
          </blockquote>
          <p className="mt-8 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
            Dss Nails &amp; Spa is not just your average manicure or pedicure. It is your hour's
            retreat from the stress of the busy city and life. Let us be your beauty best friend!
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="block w-12 h-px bg-foreground/40" />
            <p className="text-sm uppercase tracking-[0.25em] text-foreground/70">
              Joey · Founder of Dss Nails &amp; Spa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
