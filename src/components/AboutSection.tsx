import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary">
            About Me
          </h2>
          <div className="glass-effect p-5 sm:p-8 rounded-lg">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate AI/ML Engineer with expertise in developing and deploying machine learning models. 
              My work focuses on creating innovative solutions using cutting-edge AI technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;