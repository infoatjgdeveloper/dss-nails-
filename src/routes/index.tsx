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
      { title: "Dss Nails & Spa — Luxury Nail Salon in Astoria, Queens" },
      {
        name: "description",
        content:
          "Dss Nails & Spa — Astoria's trusted luxury nail salon in the heart of Queens since September 2023. Specializing in UV Gel Manicures, nail art, and wellness-focused care.",
      },
      { property: "og:title", content: "Dss Nails & Spa — Your Beauty Best Friend" },
      {
        property: "og:description",
        content: "Wellness-focused, professional nail care in Astoria, Queens since September 2023.",
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
