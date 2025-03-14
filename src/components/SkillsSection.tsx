import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "TensorFlow", level: 85 },
  { name: "PyTorch", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "Computer Vision", level: 75 },
];

const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#2A2F3C]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary"
        >
          Skills
        </motion.h2>
        <div className="max-w-3xl mx-auto glass-effect p-5 sm:p-8 rounded-lg">
          <div className="space-y-4 sm:space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm sm:text-base w-full sm:w-32 text-gray-300 font-medium">{skill.name}</span>
                  <div className="flex-1 bg-white/5 rounded-full h-2 sm:h-3">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm sm:text-base w-12 text-right text-gray-300 font-medium">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;