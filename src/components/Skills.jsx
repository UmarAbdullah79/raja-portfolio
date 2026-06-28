import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Play, Sparkles } from "lucide-react";

// Reusable Circular Progress Skill Component
function CircularProgress({ percentage, logo, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  // Make sure to handle percentage starting from 0
  const strokeDashoffset = circumference - (count / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;
    const end = percentage;
    if (end === 0) return;
    
    const duration = 1500; // 1.5 seconds total
    const increment = end / (duration / 16); // ~60fps
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 group">
      <div className="relative w-28 h-28 flex items-center justify-center rounded-full glass-card hover:shadow-white/[0.04] hover:scale-105 transition-all duration-300">
        {/* Hover Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-300 pointer-events-none" />
        
        {/* SVG Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-white/5 fill-none"
            strokeWidth="5"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-accent fill-none"
            strokeWidth="5"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
        {/* Center Logo */}
        <div className="absolute w-12 h-12 flex items-center justify-center text-white/60 group-hover:text-accent transition-colors duration-300 p-2">
          {logo}
        </div>
      </div>
      <div className="text-center">
        <span className="block text-xs font-semibold tracking-widest uppercase text-white/80">{label}</span>
        <span className="block text-sm text-white/50 mt-1 font-mono">{count}%</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isPlaying, setIsPlaying] = useState(false);

  // SVG Logos
  const capcutLogo = (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M25,25 H60 L45,45 H25 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M75,75 H40 L55,55 H75 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M45,45 L55,55" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );

  const premiereLogo = (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect width="100" height="100" rx="15" fill="none" stroke="currentColor" strokeWidth="6"/>
      <text x="50" y="65" fill="currentColor" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="Poppins, sans-serif">Pr</text>
    </svg>
  );

  const aeLogo = (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect width="100" height="100" rx="15" fill="none" stroke="currentColor" strokeWidth="6"/>
      <text x="50" y="65" fill="currentColor" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="Poppins, sans-serif">Ae</text>
    </svg>
  );

  const psLogo = (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect width="100" height="100" rx="15" fill="none" stroke="currentColor" strokeWidth="6"/>
      <text x="50" y="65" fill="currentColor" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="Poppins, sans-serif">Ps</text>
    </svg>
  );

  return (
    <section id="skills" className="relative py-24 bg-bg-sec/30 border-y border-white/5">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-silver"
          >
            Professional Skills
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Circular Progress Bars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center max-w-4xl mx-auto mb-24">
          <CircularProgress percentage={100} logo={capcutLogo} label="CapCut" />
          <CircularProgress percentage={85} logo={premiereLogo} label="Premiere Pro" />
          <CircularProgress percentage={45} logo={aeLogo} label="After Effects" />
          <CircularProgress percentage={70} logo={psLogo} label="Photoshop" />
        </div>

        {/* Bottom Section: Additional Skills & Showreel Phone Mock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Additional Skills Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-white mb-2 uppercase">
                Core Disciplines
              </h3>
              <p className="text-white/50 text-sm font-light mb-8">
                Translating artistic vision into compelling digital stories, from initial camera composition to high-end color grading.
              </p>
            </motion.div>

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-sm hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/[0.01] group-hover:bg-white/[0.02] blur-xl transition-colors duration-300" />
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/70 group-hover:text-accent transition-colors">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold tracking-wider text-white uppercase mb-2">
                    Cinematography
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                    Creating visually compelling shots using advanced composition, natural and studio lighting, dynamic camera movement, framing, and detailed cinematic storytelling.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-sm hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/[0.01] group-hover:bg-white/[0.02] blur-xl transition-colors duration-300" />
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/70 group-hover:text-accent transition-colors">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold tracking-wider text-white uppercase mb-2">
                    Film Making
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                    Experienced in directing, production planning, shooting, editing, and delivering complete film productions from concept ideation to final screen-ready output.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Smartphone Showreel Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 aspect-[9/19] border-[10px] border-black rounded-[40px] overflow-hidden shadow-2xl glass-panel bg-black ring-1 ring-white/10"
            >
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-900 ml-auto mr-4" />
              </div>

              {/* Showreel Placeholder Screen */}
              <div className="relative w-full h-full bg-bg-main overflow-hidden flex flex-col justify-between p-6">
                
                {/* Header */}
                <div className="flex justify-between items-center text-[10px] text-white/30 font-medium pt-2">
                  <span>SHOWREEL</span>
                  <span>9:16 Cinematic</span>
                </div>

                {/* Center Content / Play Button */}
                <div className="flex flex-col items-center gap-4 text-center my-auto">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="relative w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current translate-x-[2px]" />
                    <span className="absolute -inset-2 rounded-full border border-white/20 animate-ping pointer-events-none" />
                  </button>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-white font-semibold">
                      Featured Showreel
                    </h5>
                    <p className="text-[10px] text-white/40 mt-1 font-light max-w-[150px]">
                      A curation of the finest edits, grading, and shots.
                    </p>
                  </div>
                </div>

                {/* Footer UI */}
                <div className="flex flex-col gap-2 w-full">
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-accent/60 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-white/30 font-medium">
                    <span>0:00</span>
                    <span>1:30</span>
                  </div>
                </div>

                {/* Looping Ambient Shadow Layer */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000]/30 to-[#000]/80 pointer-events-none" />

                {/* If playing state (mock) */}
                {isPlaying && (
                  <div 
                    onClick={() => setIsPlaying(false)}
                    className="absolute inset-0 z-30 bg-black flex items-center justify-center cursor-pointer"
                  >
                    <div className="text-center px-4">
                      <Film className="w-8 h-8 mx-auto text-white/50 mb-3 animate-spin" />
                      <p className="text-[10px] uppercase tracking-widest text-white/80">Loading Showreel...</p>
                      <p className="text-[8px] text-white/40 mt-2 font-mono">click to close</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-6 block">
              Featured Showreel Placeholder
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
