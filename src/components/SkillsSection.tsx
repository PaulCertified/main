import { motion } from "framer-motion";

const skills = [
  {
    title: "Full-Stack AI & Machine Learning Engineering",
    description: "Expertise in developing and deploying ML models (e.g., AWS Comprehend Medical, AWS Bedrock) with real-world applications."
  },
  {
    title: "Cloud & DevOps (AWS & Terraform)",
    description: "Strong experience with AWS services (EC2, S3, Lambda, DynamoDB, SageMaker) and Infrastructure as Code (Terraform)."
  },
  {
    title: "Backend Development & APIs",
    description: "Proficiency in FastAPI, Node.js, Express.js for building scalable and secure API-driven applications."
  },
  {
    title: "Frontend Development & UI/UX",
    description: "Skilled in React, TypeScript, Material-UI, and responsive design for user-friendly web applications."
  },
  {
    title: "Security & Identity Management",
    description: "Knowledge of IAM, JWT authentication, role-based access control, and compliance (HIPAA, CMS)."
  },
  {
    title: "IT Infrastructure & Support",
    description: "Extensive experience managing Windows/Linux servers, Active Directory, VPNs, and enterprise IT environments."
  }
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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-5 sm:p-6 rounded-lg h-full"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-primary-light mb-3">{skill.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;