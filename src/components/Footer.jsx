import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        {/* Left: Copyright */}
        <p className="text-white/40 text-xs tracking-wider font-light">
          © {new Date().getFullYear()} RAJA PANDI PORTFOLIO. ALL RIGHTS RESERVED.
        </p>

        {/* Right: Credits */}
        <p className="text-white/40 text-xs tracking-wider font-light flex items-center gap-1.5 justify-center sm:justify-end">
          DESIGNED WITH 
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-white"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-accent" />
          </motion.span>
        </p>
      </div>
    </footer>
  );
}
