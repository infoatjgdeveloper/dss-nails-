export function Locations() {
  return (
    <section id="locations" className="relative py-32 lg:py-44 px-6 lg:px-10 overflow-hidden">
      {/* Wave divider top */}
      <svg
        className="absolute top-0 left-0 w-full h-16 text-secondary/40"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">
          Find Us
        </p>
        <h2 className="font-serif text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-foreground">
          Dss <em className="text-primary italic">Locations</em>
        </h2>

        <div className="mt-16 max-w-xl mx-auto text-center group cursor-pointer">
          <p className="font-serif text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors">
            Astoria
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            2520 21 Street, New York, New York 11102
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=2520+21+Street,+New+York,+New+York+11102"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-xs uppercase tracking-[0.25em] text-primary underline-grow inline-block"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
