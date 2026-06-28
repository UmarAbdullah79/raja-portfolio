import { motion } from "framer-motion";
import { Tv, Newspaper, Users, Clapperboard, Sparkles } from "lucide-react";

const aboutCards = [
  {
    id: 1,
    category: "Internship",
    title: "VIJAY TV",
    description: 'Worked as an Intern in the production team of the popular show "Are U Ready". Gained invaluable hands-on experience in studio environment dynamics, broadcast workflow coordination, and live television scheduling.',
    icon: Tv,
  },
  {
    id: 2,
    category: "Internship",
    title: "REFLECT NEWS PRIVATE LIMITED",
    description: "Completed an intensive 6 Months Internship focusing on news production, camera work, cinematography logistics, studio newsroom operations, and rapid daily news editing setups.",
    icon: Newspaper,
  },
  {
    id: 3,
    category: "Conference",
    title: "DAKSHIN 2022",
    description: "Attended the prestigious South India Media & Entertainment Summit, a comprehensive two-day conference exploring current media shifts, industry trends, and future cinematographic technologies.",
    icon: Users,
  },
  {
    id: 4,
    category: "Workshop",
    title: "Film Making Workshop",
    description: "Participated in an immersive three-day filmmaking workshop conducted by Indian film director Mr. Sabarish, focusing on direction, camera techniques, narrative building, and post-production.",
    icon: Clapperboard,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-main">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-silver uppercase"
          >
            About & Experience
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* 2x2 Grid of Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 rounded-sm hover:border-white/20 transition-all duration-300 relative group overflow-hidden text-left flex flex-col justify-between"
              >
                {/* Background lighting */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/[0.01] group-hover:bg-white/[0.02] blur-2xl transition-colors duration-300" />
                
                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                      {card.category}
                    </span>
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm text-white/50 group-hover:text-accent transition-all duration-300 group-hover:bg-accent/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold tracking-wider text-white uppercase mb-4 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Aesthetic footer marker */}
                <div className="w-6 h-[1.5px] bg-white/20 group-hover:w-12 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
