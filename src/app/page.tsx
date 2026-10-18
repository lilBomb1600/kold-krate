import { ChoiceProvider } from "@/components/Choice";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pair } from "@/components/Pair";
import { Quote } from "@/components/Quote";
import { Reasons } from "@/components/Reasons";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Specs } from "@/components/Specs";

export default function Home() {
  return (
    <ChoiceProvider>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Reasons />
        <Pair />
        <Specs />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </ChoiceProvider>
  );
}
