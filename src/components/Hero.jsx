import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  // Update spotlight coordinates based on mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = `${e.clientX - rect.left}px`;
      const y = `${e.clientY - rect.top}px`;
      setCoords({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const handleScrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-bg-main overflow-hidden px-6 md:px-12 pt-20"
      style={{
        "--x": coords.x,
        "--y": coords.y,
      }}
    >
      {/* Dynamic Spotlight */}
      <div className="absolute inset-0 spotlight pointer-events-none z-0" />

      {/* Floating Particle Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-white/40"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Video Editor & Cinematographer
            </span>
          </motion.div>

          {/* Large Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gradient-silver"
            >
              RAJA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]"
            >
              PANDI
            </motion.span>
          </h1>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs font-semibold tracking-widest uppercase text-white/80"
          >
            <span>Film Maker</span>
            <span className="text-white/20">•</span>
            <span>Cinematographer</span>
            <span className="text-white/20">•</span>
            <span>Video Editor</span>
          </motion.div>

          {/* Professional Objective */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-10 font-light"
          >
            "Passionate Video Editor and Cinematographer dedicated to creating visually stunning cinematic stories through editing, filmmaking, color grading, and creative storytelling. Skilled in transforming ideas into engaging visual experiences while constantly learning new creative techniques."
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleScrollToWorks}
              className="px-8 py-4 bg-accent text-black hover:bg-white hover:text-black border border-accent hover:border-white/20 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/5 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              View Works
            </button>
            <a
              href="#"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side Image Frame */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-96 md:w-80 md:h-[450px] lg:w-full lg:h-[500px] border border-white/10 rounded-sm overflow-hidden bg-bg-sec/60 group shadow-2xl"
          >
            {/* Shutter Animation Overlay */}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.85, 0, 0.15, 1] }}
              className="absolute inset-0 bg-black z-20 origin-top"
            />
            
            {/* Camera Shutter Ring Overlay */}
            <div className="absolute inset-0 border-[16px] border-black/80 pointer-events-none z-10 transition-all duration-500 group-hover:border-[10px]" />
            <div className="absolute inset-4 border border-white/5 pointer-events-none z-10" />

            {/* Profile Image */}
            <img
              src="/raja_profile.png"
              alt="Raja Pandi Profile"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
            />

            {/* Glowing Corner Borders */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/30 z-15 pointer-events-none group-hover:border-white transition-all duration-300" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white/30 z-15 pointer-events-none group-hover:border-white transition-all duration-300" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-white/30 z-15 pointer-events-none group-hover:border-white transition-all duration-300" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/30 z-15 pointer-events-none group-hover:border-white transition-all duration-300" />
          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          const element = document.getElementById("skills");
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 70,
              behavior: "smooth",
            });
          }
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-white/40" />
      </motion.div>
    </section>
  );
}
