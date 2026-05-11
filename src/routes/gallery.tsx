import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import last uploaded gallery images
import nail23 from "@/assets/gallery/nail-23.jpg";
import nail24 from "@/assets/gallery/nail-24.jpg";
import nail25 from "@/assets/gallery/nail-25.jpg";
import nail26 from "@/assets/gallery/nail-26.jpg";
import nail27 from "@/assets/gallery/nail-27.jpg";
import nail28 from "@/assets/gallery/nail-28.jpg";
import nail29 from "@/assets/gallery/nail-29.jpg";
import nail30 from "@/assets/gallery/nail-30.jpg";
import nail31 from "@/assets/gallery/nail-31.jpg";
import nail32 from "@/assets/gallery/nail-32.jpg";
import nail33 from "@/assets/gallery/nail-33.jpg";
import nail34 from "@/assets/gallery/nail-34.jpg";
import nail35 from "@/assets/gallery/nail-35.jpg";
import nail36 from "@/assets/gallery/nail-36.jpg";
import nail37 from "@/assets/gallery/nail-37.jpg";
import nail38 from "@/assets/gallery/nail-38.jpg";
import nail39 from "@/assets/gallery/nail-39.jpg";
import nail40 from "@/assets/gallery/nail-40.jpg";
import nail41 from "@/assets/gallery/nail-41.jpg";
import nail42 from "@/assets/gallery/nail-42.jpg";
import nail43 from "@/assets/gallery/nail-43.jpg";
import nail44 from "@/assets/gallery/nail-44.jpg";


export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Dss Nails & Spa" },
      {
        name: "description",
        content: "Explore our portfolio of luxury nail art, from minimal designs to intricate masterpieces.",
      },
    ],
  }),
});

const galleryItems = [
  { src: nail25, alt: "Soft pink ombre hands with rings", category: "Elegant" },
  { src: nail23, alt: "Nude pink ombre almond nails", category: "Gradient" },
  { src: nail24, alt: "Silver glitter gradient almond nails", category: "Glamour" },

  { src: nail41, alt: "Iridescent pink nails with gold stars and pearl embellishments", category: "Artistic" },

  { src: nail26, alt: "White French tips with hand-painted cherry art", category: "Hand-painted" },
  { src: nail27, alt: "Classic glitter French tip manicure", category: "Classic" },
  { src: nail28, alt: "Deep purple iridescent chrome stiletto nails", category: "Chrome" },
  { src: nail29, alt: "Hot pink glitter tips with crystal embellishments", category: "Glamour" },
  { src: nail30, alt: "Abstract brown floral and tortoise pattern design", category: "Artistic" },
  { src: nail31, alt: "Cherry blossom inspired white French tips", category: "Hand-painted" },
  { src: nail32, alt: "Deep teal nails with light blue border and gold accents", category: "Modern" },
  { src: nail33, alt: "Classic vibrant solid red glossy nails", category: "Classic" },
  { src: nail34, alt: "Celestial white nails with gold stars and crystals", category: "Artistic" },
  { src: nail35, alt: "Luxury red French tips with heavy red rhinestone accents", category: "Glamour" },
  { src: nail36, alt: "Soft pink ombre with delicate white floral and pearl art", category: "Floral" },
  { src: nail37, alt: "Playful pastel multicolor French tip set", category: "Modern" },
  { src: nail38, alt: "Ethereal white nails with celestial eye and star motifs", category: "Artistic" },
  { src: nail39, alt: "Elegant black French tips with hand-painted black floral details", category: "Modern" },
  { src: nail40, alt: "Dramatic red French tips with intricate red crystal work", category: "Glamour" },
  { src: nail42, alt: "Clean white French tips with elegant square crystal accents", category: "Elegant" },
  { src: nail43, alt: "Vibrant butterfly wing nail art in blue and pink", category: "Artistic" },
  { src: nail44, alt: "Soft pink glossy square manicure", category: "Classic" },

];

function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-48 lg:pb-36 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6 animate-fade-up">
              The Portfolio
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] animate-fade-up" style={{ animationDelay: '100ms' }}>
              Masterpieces in <br />
              <em className="text-accent italic">Every Detail</em>
            </h1>
            <p className="max-w-xl mt-10 text-muted-foreground text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              Our gallery showcase reflects the artistry and precision we bring to every client.
              From avant-garde chrome shifts to timeless elegance, find inspiration for your next set.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden bg-muted animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {item.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
