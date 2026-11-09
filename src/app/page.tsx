import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Story } from "@/components/Story";
import { Award } from "@/components/Award";
import { MenuSection } from "@/components/MenuSection";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Award />
        <MenuSection />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
