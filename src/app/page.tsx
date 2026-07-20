import Navbar from "@/components/layout/Navbar";
import Atas from "@/components/sections/hero/atas";
import Marquee from "@/components/sections/hero/Marquee";
import Services from "@/components/sections/services/Services";
import About from "@/components/sections/about/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Atas />
      <Marquee />
      <Services />
      <About />
    </main>
  );
}