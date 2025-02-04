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
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <span className="w-24 text-primary font-medium">{skill.name}</span>
                <div className="flex-1 bg-white rounded-full h-4">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="w-12 text-primary font-medium">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;