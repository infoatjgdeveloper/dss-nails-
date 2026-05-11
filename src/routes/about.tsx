import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dss Nails & Spa" },
      {
        name: "description",
        content:
          "Discover the story behind Dss Nails & Spa, our philosophy, and visit us during our business hours Tuesday through Sunday.",
      },
      { property: "og:title", content: "About — Dss Nails & Spa" },
      {
        property: "og:description",
        content:
          "A serene retreat for nail care. Learn about our craft and plan your visit during our weekly hours.",
      },
    ],
  }),
  component: AboutPage,
});

const hours = [
  { short: "Mon", day: "Monday", time: "Closed", closed: true },
  { short: "Tue", day: "Tuesday", time: "10:00 AM – 08:00 PM" },
  { short: "Wed", day: "Wednesday", time: "10:00 AM – 08:00 PM" },
  { short: "Thu", day: "Thursday", time: "10:00 AM – 08:00 PM" },
  { short: "Fri", day: "Friday", time: "10:00 AM – 08:00 PM" },
  { short: "Sat", day: "Saturday", time: "10:00 AM – 08:00 PM" },
  { short: "Sun", day: "Sunday", time: "10:00 AM – 07:00 PM" },
];

function AboutPage() {
  const today = new Date().getDay(); // 0 = Sun
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-10 bg-gradient-blush">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.35em] text-primary mb-6">
            About Us
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground">
            A quiet retreat for{" "}
            <em className="text-primary">beautifully cared</em> hands.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dss Nails &amp; Spa was founded with one simple belief — that beauty rituals
            should feel like an exhale. Every visit is crafted to feel personal, slow,
            and unmistakably yours.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 border-b border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6 animate-fade-up">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Crafted with patience. <br />
            Finished with intention.
          </h2>
          <div className="space-y-6 text-base lg:text-xl leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: '200ms' }}>
            <p>
              What began as a small studio has grown into a sanctuary trusted by guests
              who value quality, hygiene, and an unrushed pace. Our technicians are
              trained in the latest techniques — from soft gel extensions to detailed
              hand-painted artistry.
            </p>
            <p>
              We use premium, low-odor products and sterilized tools for every guest,
              because we believe that luxury begins with care you can feel — not just
              see.
            </p>
            <p>
              Whether you're here for a quiet weekday treat or preparing for a special
              moment, we'd love to welcome you in.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
            {[
              {
                title: "Hygiene First",
                copy: "Hospital-grade sterilization and single-use tools where it matters most.",
              },
              {
                title: "Quiet Luxury",
                copy: "A calm, considered space designed to slow you down — never rush you.",
              },
              {
                title: "Lasting Finish",
                copy: "Premium gels and lacquers selected for shine, wear, and gentle removal.",
              },
            ].map((v) => (
              <div key={v.title} className="flex flex-col items-center">
                <span className="block w-10 h-px bg-primary mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">
              Business Hours
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Walk-ins welcome based on availability. For the smoothest experience, we
              recommend booking ahead.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {hours.map((h, i) => {
              const isToday = i === todayIndex;
              return (
                <li
                  key={h.day}
                  className={`grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4 py-5 md:py-6 px-2 transition-colors ${isToday ? "bg-primary/5" : ""
                    }`}
                >
                  <span className="font-serif text-lg md:text-xl text-primary">
                    {h.short}
                  </span>
                  <span className="text-foreground text-base md:text-lg">
                    {h.day}
                    {isToday && (
                      <span className="ml-3 text-[10px] uppercase tracking-[0.25em] text-primary">
                        Today
                      </span>
                    )}
                  </span>
                  <span
                    className={`text-sm md:text-base tabular-nums ${h.closed ? "text-muted-foreground italic" : "text-foreground"
                      }`}
                  >
                    {h.time}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 text-center">
            <a
              href="tel:17186068808"
              className="inline-flex items-center px-10 py-4 bg-foreground text-background text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors duration-500"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
