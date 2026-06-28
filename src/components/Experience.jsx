import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "IUNOWARE Tech",
    role: "Video Editor & Cinematographer",
    duration: "1.5 Years (Currently Working)",
    description:
      "Currently working on corporate advertisements, branding campaigns, high-end promotional videos, commercial shoots, product reels, cinematic storytelling, and full-scale commercial productions.",
    location: "Chennai, India",
    side: "left", // for desktop timeline side placement
  },
  {
    id: 2,
    company: "Glory Studio",
    role: "Video Editor",
    duration: "6 Months",
    description:
      "Worked as a professional Video Editor handling cinematic narrative editing, social media reels, promotional commercials, color correction, sound design, and creative video sequencing.",
    location: "Chennai, India",
    side: "right",
  },
];

export default function Experience() {
  return (
    <section id="works" className="relative py-24 bg-bg-main">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-silver"
          >
            Work Experience
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Timeline Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-[0.5px] pointer-events-none" />

          {/* Interactive Scroll-Growth Line (Framer Motion) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent via-accent/50 to-accent/10 origin-top -translate-x-[0.5px] pointer-events-none"
          />

          {/* Experience items */}
          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, idx) => {
              const isLeft = exp.side === "left";

              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Node Point (Glow Circle) */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-black border-2 border-accent -translate-x-1.5 top-8 z-20 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

                  {/* Spacer / Content wrap for grid alignment */}
                  <div
                    className={`w-full md:w-[46%] pl-10 md:pl-0 ${
                      isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card p-8 rounded-sm hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Background Soft Accent Gradient */}
                      <div className="absolute -inset-px bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Header Info */}
                      <div className={`flex flex-col gap-1 mb-4 ${isLeft ? "md:items-end" : "md:items-start"}`}>
                        <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-mono mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-white/70 tracking-widest uppercase flex items-center gap-1.5 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5 opacity-60" />
                          {exp.company}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Location Tag */}
                      <div className={`flex items-center gap-1.5 text-xs text-white/30 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
