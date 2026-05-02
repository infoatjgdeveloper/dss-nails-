import { Link } from "@tanstack/react-router";
import tips from "@/assets/gallery-tips.jpg";
import flowers from "@/assets/gallery-flowers.jpg";
import team from "@/assets/gallery-team.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground">
              The <em className="text-accent">Gallery</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into our craft — from quiet, minimal sets to soft floral artistry,
            and the team behind every detail.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-12">
          <figure className="col-span-12 md:col-span-7 hover-zoom">
            <img
              src={flowers}
              alt="Pink nails with delicate white flower nail art"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </figure>
          <figure className="col-span-6 md:col-span-5 hover-zoom">
            <img
              src={tips}
              alt="Long almond-shaped nude gel nail tips"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-[200px] md:h-[270px] object-cover"
            />
          </figure>
          {/* <figure className="col-span-6 md:col-span-5 hover-zoom">
            <img
              src={team}
              alt="DSS Nails and Spa team photo"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-[200px] md:h-[270px] object-cover"
            />
          </figure> */}
        </div>

        <div className="flex justify-center">
          <Link
            to="/gallery"
            className="inline-flex items-center px-10 py-4 border border-foreground text-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
