import { BuiltIn } from "@/components/BuiltIn";
import { ChoiceProvider } from "@/components/Choice";
import { ColdHot } from "@/components/ColdHot";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Maker } from "@/components/Maker";
import { InkDefs } from "@/components/MillStamp";
import { Nav } from "@/components/Nav";
import { Quote } from "@/components/Quote";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <ChoiceProvider>
      <InkDefs />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <BuiltIn />
        <ColdHot />
        <Maker />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </ChoiceProvider>
  );
}
