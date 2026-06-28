import { motion } from "framer-motion";
import { Film, Eye, Sparkles } from "lucide-react";

const shortFilms = [
  {
    id: "sf-1",
    title: "UNNAI KANDA THENDRAL",
    roles: ["Cinematography", "Editing", "DI (TL)"],
    tag: "Romantic Drama",
    year: "2025",
  },
  {
    id: "sf-2",
    title: "CIGAR",
    roles: ["Cinematography", "Editing", "DI (TL)"],
    tag: "Thriller / Crime",
    year: "2024",
  },
  {
    id: "sf-3",
    title: "THANIMAI",
    roles: ["Director", "Cinematography", "Editing", "DI"],
    tag: "Emotional / Indie",
    year: "2024",
  },
  {
    id: "sf-4",
    title: "SOZHINA",
    roles: ["Cinematography", "Editing", "DI (TL)"],
    tag: "Drama / Mystery",
    year: "2023",
  },
  {
    id: "sf-5",
    title: "KOLAI",
    roles: ["Cinematography"],
    tag: "Suspense / Noir",
    year: "2023",
  },
];

const documentaries = [
  {
    id: "doc-1",
    title: "BUN POROTTA",
    roles: ["Cinematography", "DI"],
    tag: "Food & Culture",
    year: "2025",
  },
  {
    id: "doc-2",
    title: "DRUG ADDICTION",
    roles: ["Cinematography", "Editing"],
    tag: "Social Awareness",
    year: "2024",
  },
  {
    id: "doc-3",
    title: "ONLINE vs OFFLINE GAMER'S",
    roles: ["Cinematography"],
    tag: "Gaming & Youth",
    year: "2023",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[3/4] rounded-sm overflow-hidden glass-card border border-white/5 bg-bg-sec/40 shimmer-border flex flex-col justify-end p-6 cursor-pointer"
    >
      {/* Background Poster Placeholder (Visual Graphic) */}
      <div className="absolute inset-0 bg-bg-sec/20 group-hover:scale-105 transition-transform duration-700 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle camera lens/shutter SVG drawing as placeholder artwork */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-1/2 h-1/2 text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 transform group-hover:rotate-45"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="20" />
          <line x1="50" y1="15" x2="50" y2="5" />
          <line x1="50" y1="85" x2="50" y2="95" />
          <line x1="15" y1="50" x2="5" y2="50" />
          <line x1="85" y1="50" x2="95" y2="50" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      {/* Shutter glow overlay on card hover */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Movie info top details */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <span className="text-[9px] font-mono tracking-widest text-accent/60 uppercase">
          {project.tag}
        </span>
        <span className="text-[10px] font-mono tracking-widest text-white/50">
          {project.year}
        </span>
      </div>

      {/* Poster Play Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-15">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-accent scale-75 group-hover:scale-100 transition-all duration-300">
          <Eye className="w-5 h-5" />
        </div>
      </div>

      {/* Movie info bottom details */}
      <div className="relative z-20 transition-transform duration-500 transform group-hover:translate-y-[-4px]">
        {/* Film Icon */}
        <Film className="w-4 h-4 text-white/40 mb-3 group-hover:text-white/60 transition-colors" />
        
        {/* Title */}
        <h4 className="text-lg md:text-xl font-bold tracking-wider text-white uppercase mb-4 leading-snug">
          {project.title}
        </h4>

        {/* Roles Details */}
        <div className="flex flex-col gap-1 border-t border-white/5 pt-3">
          <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase">
            CREATIVE ROLES
          </span>
          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
            {project.roles.map((role, idx) => (
              <span 
                key={idx} 
                className="text-[10px] tracking-wider text-white/70 hover:text-white transition-colors"
              >
                {role}{idx < project.roles.length - 1 ? "  •" : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-bg-sec/20 border-b border-white/5">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-silver uppercase"
          >
            Selected Works
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* ======================================================== */}
        {/* SHORT FILMS SECTION */}
        {/* ======================================================== */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white uppercase">
              Short Films
            </h3>
            <span className="h-[1px] flex-grow bg-white/5"></span>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
              05 PROJECTS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {shortFilms.map((film, idx) => (
              <ProjectCard key={film.id} project={film} index={idx} />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DOCUMENTARIES SECTION */}
        {/* ======================================================== */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white uppercase">
              Documentaries
            </h3>
            <span className="h-[1px] flex-grow bg-white/5"></span>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
              03 PROJECTS
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentaries.map((doc, idx) => (
              <ProjectCard key={doc.id} project={doc} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
