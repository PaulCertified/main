import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "AI Image Recognition System",
    description: "Developed a deep learning model for real-time image recognition using TensorFlow.",
    tech: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "NLP Chatbot",
    description: "Created an intelligent chatbot using natural language processing techniques.",
    tech: ["Python", "PyTorch", "NLTK"],
  },
  {
    title: "Predictive Analytics Platform",
    description: "Built a machine learning platform for predictive analytics in business.",
    tech: ["Python", "Scikit-learn", "pandas"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-light text-primary text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;