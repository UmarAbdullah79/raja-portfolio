import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for navbar glass opacity & active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar transparent vs translucent background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section tracking based on viewport position
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${isScrolled
            ? "py-4 bg-bg-main/75 backdrop-blur-md border-b border-white/5 shadow-xl"
            : "py-6 bg-transparent"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-2 cursor-pointer interactive-logo group"
          >
            <Camera className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            <span className="font-bold tracking-[0.25em] text-sm uppercase text-white">
              RAJA PANDI
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative py-1 text-xs tracking-widest uppercase cursor-pointer transition-colors duration-300 ${activeSection === item.id
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white cursor-pointer z-50"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-bg-main flex flex-col justify-center items-center gap-8 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          >
            {/* Background Spotlights */}
            <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-white/[0.03] blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-white/[0.02] blur-3xl" />

            {menuItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`text-xl tracking-[0.2em] uppercase cursor-pointer ${activeSection === item.id ? "text-white font-semibold" : "text-white/50"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
