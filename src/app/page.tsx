import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import About from "../components/About";
import Services from "../components/Services";
import ProjectShowcase from "../components/ProjectShowcase";
import Sectors from "../components/Sectors";
import QualitySafety from "../components/QualitySafety";
import Statement from "../components/Statement";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <ProjectShowcase />
        <Sectors />
        <QualitySafety />
        <Statement />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
