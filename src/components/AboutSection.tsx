import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate AI/ML Engineer with expertise in developing and deploying machine learning models. 
            My work focuses on creating innovative solutions using cutting-edge AI technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;