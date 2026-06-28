import { motion } from "framer-motion";
import { Phone, Mail, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, form logic would happen here.
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-sec/30 border-y border-white/5">
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

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
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-silver uppercase"
          >
            Contact Me
          </motion.h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                Let's Make Something Great
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Whether you have a commercial project, short film, documentary, or social media campaign, I'm ready to bring professional editing and cinematography to your vision.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="flex flex-col gap-4 my-6">
              
              {/* Phone Card */}
              <div className="glass-card p-6 rounded-sm flex items-center gap-4 hover:border-white/20 transition-all duration-300">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/60">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono tracking-widest text-white/30 uppercase">
                    Call / WhatsApp
                  </span>
                  <a href="tel:9600412403" className="text-sm font-semibold tracking-wider text-white hover:text-white/80 transition-colors">
                    9600412403
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-6 rounded-sm flex items-center gap-4 hover:border-white/20 transition-all duration-300">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono tracking-widest text-white/30 uppercase">
                    Email Address
                  </span>
                  <a href="mailto:santhoshdhoni666@gmail.com" className="text-sm font-semibold tracking-wider text-white hover:text-white/80 transition-colors break-all">
                    santhoshdhoni666@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div>
              <span className="block text-[8px] font-mono tracking-widest text-white/40 uppercase mb-4">
                FIND ME ON SOCIAL MEDIA
              </span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
                  title="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
                  title="Behance"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 12a2 2 0 1 0 0-4H5v4h4zm1.5 4.5a2.5 2.5 0 0 0 0-5H5v5h5.5zM21 11.5H15a2.5 2.5 0 0 0 5 0v-1.5h-5M15 8h6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-sm h-full flex flex-col justify-center border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Describe your project details..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 px-8 py-4 bg-accent text-black hover:bg-white border border-accent hover:border-white/20 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent/5 self-start active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
