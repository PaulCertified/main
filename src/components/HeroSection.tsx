import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-4"
        >
          Paul Gipson
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600"
        >
          AI/ML Engineer
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;