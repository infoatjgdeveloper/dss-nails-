import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import new gallery images
import nail1 from "@/assets/gallery/nail-1.png";
import nail2 from "@/assets/gallery/nail-2.png";
import nail3 from "@/assets/gallery/nail-3.png";
import nail4 from "@/assets/gallery/nail-4.png";
import nail5 from "@/assets/gallery/nail-5.png";
import nail6 from "@/assets/gallery/nail-6.png";
import nail7 from "@/assets/gallery/nail-7.png";
import nail8 from "@/assets/gallery/nail-8.png";
import nail9 from "@/assets/gallery/nail-9.png";
import nail10 from "@/assets/gallery/nail-10.png";
import nail11 from "@/assets/gallery/nail-11.png";
import nail12 from "@/assets/gallery/nail-12.png";
import nail13 from "@/assets/gallery/nail-13.png";
import nail14 from "@/assets/gallery/nail-14.png";
import nail15 from "@/assets/gallery/nail-15.png";
import nail16 from "@/assets/gallery/nail-16.png";
import nail17 from "@/assets/gallery/nail-17.png";
import nail18 from "@/assets/gallery/nail-18.png";
import nail19 from "@/assets/gallery/nail-19.png";
import nail20 from "@/assets/gallery/nail-20.png";
import nail21 from "@/assets/gallery/nail-21.png";
import nail22 from "@/assets/gallery/nail-22.png";

// Import existing images for a full gallery
import flowers from "@/assets/gallery-flowers.jpg";
import tips from "@/assets/gallery-tips.jpg";
import team from "@/assets/gallery-team.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — DSS Nails & Spa" },
      {
        name: "description",
        content: "Explore our portfolio of luxury nail art, from minimal designs to intricate masterpieces.",
      },
    ],
  }),
});

const galleryItems = [
  { src: nail1, alt: "Multicolor chrome stiletto nails", category: "Nail Art" },
  { src: nail2, alt: "White glitter gradient almond nails", category: "Minimal" },
  { src: nail3, alt: "Milky white nails with cherry art", category: "Hand-painted" },
  { src: nail9, alt: "Natural cherry art variation", category: "Hand-painted" },
  { src: flowers, alt: "Delicate floral nail art", category: "Floral" },
  { src: nail4, alt: "Cream nails with brown floral patterns and gold studs", category: "Design" },
  { src: nail5, alt: "Pink glitter French tips with rhinestones", category: "Glamour" },
  { src: nail10, alt: "Glamour pink glitter variation", category: "Glamour" },
  { src: nail11, alt: "Vibrant blue chrome stiletto nails", category: "Chrome" },
  { src: nail15, alt: "Multicolor shift chrome stiletto", category: "Chrome" },
  { src: nail12, alt: "Soft pearl chrome almond nails", category: "Elegant" },
  { src: nail13, alt: "Artistic 3D bubble and gem art", category: "Avant-garde" },
  { src: nail14, alt: "Classic short square French tips", category: "Timeless" },
  { src: nail16, alt: "Black French tips with white outline", category: "Modern" },
  { src: nail17, alt: "Long square white French with crystals", category: "Glamour" },
  { src: nail18, alt: "Rose gold metallic French tips on square nails", category: "Elegant" },
  { src: nail19, alt: "Playful 3D fruit and flower resin art", category: "Avant-garde" },
  { src: nail20, alt: "Bold black square nails with white stars", category: "Edgy" },
  { src: nail21, alt: "Glossy white nails with black hand-painted flowers", category: "Artistic" },
  { src: nail22, alt: "Vibrant metallic blue chrome stiletto nails", category: "Chrome" },
  { src: nail6, alt: "Teal nails with blue rim and gold studs", category: "Modern" },
  { src: nail7, alt: "Red French tips with red rhinestones", category: "Bold" },
  { src: nail8, alt: "Classic vibrant red almond nails", category: "Classic" },
  { src: tips, alt: "Nude gel nail tips", category: "Classic" },
  { src: team, alt: "Our professional nail tech team", category: "Studio" },
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
