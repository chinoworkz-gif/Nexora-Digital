import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Solutions from "@/components/sections/Solutions";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Solutions />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </>
  );
}