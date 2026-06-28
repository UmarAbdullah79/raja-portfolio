import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FilmGrain from "./components/FilmGrain";
import CustomCursor from "./components/CustomCursor";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Parallax scrolling for decorative blur orbs using GSAP ScrollTrigger
    gsap.to(".animate-pulse-glow", {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal animation for section horizontal dividers
    gsap.utils.toArray("hr, .border-y, .border-b").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* Global Elements */}
      <FilmGrain />
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
