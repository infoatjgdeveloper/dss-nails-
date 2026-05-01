import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DSS Nails & Spa — Luxury Nail Salon in New York" },
      {
        name: "description",
        content:
          "DSS Nails & Spa — NYC's trusted luxury nail salon since 2006. Specializing in Japanese Gel Manicures, nail art, and wellness-focused care.",
      },
      { property: "og:title", content: "DSS Nails & Spa — Your Beauty Best Friend" },
      {
        property: "og:description",
        content: "Wellness-focused, professional nail care in New York City since 2006.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Locations />
      <Footer />
    </main>
  );
}
