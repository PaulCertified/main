import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      <div className="absolute inset-0 opacity-50">
        <ParticleBackground />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Paul Gipson
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI/ML Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white neon-glow hover:bg-primary/90 transition-all duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full glass-effect hover:bg-white/10 transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;