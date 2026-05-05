export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-10 bg-gradient-soft">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6 animate-fade-up">
          Our Philosophy
        </p>
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
          "Our aim is to provide all guests with{" "}
          <em className="text-primary">impeccable services</em> through experiences that
          nurture the body, mind, &amp; spirit 🌱"
        </blockquote>
        <p className="mt-10 text-base lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
          Dss Nails &amp; Spa is not just your average manicure or pedicure. It is your hour's
          retreat from the stress of the busy city and life. Let us be your beauty best friend!
        </p>
      </div>
    </section>
  );
}
