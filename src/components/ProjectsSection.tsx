import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "Clinical Note Compliance Checker (NLP on AWS)",
    description: "Uses AWS Comprehend Medical to analyze clinical notes and check for CMS and HIPAA compliance.",
    tech: ["FastAPI", "AWS Lambda", "DynamoDB", "IAM", "Python", "JavaScript", "HTML/CSS"],
    details: [
      "Modern FastAPI Python web framework with Swagger UI documentation",
      "Serverless AWS Lambda compute for note analysis",
      "NoSQL DynamoDB for storing analysis results",
      "Role-based IAM access control and security policies",
      "Frontend built with responsive design principles"
    ],
    overview: "Healthcare providers must ensure clinical documentation meets strict compliance standards. This project leverages AWS Comprehend Medical's NLP capabilities to automatically scan, analyze, and flag potential compliance issues in clinical notes, helping healthcare organizations maintain regulatory compliance with CMS requirements and HIPAA regulations while improving operational efficiency."
  },
  {
    title: "ICD-10 & CPT Medical Code Prediction from Clinical Text",
    description: "This project extracts diagnosis and procedure descriptions from unstructured clinical text and maps them to standardized medical codes (ICD-10 for diagnoses and CPT for procedures) using NLP and transformer models.",
    tech: ["Python", "BioBERT", "AWS SageMaker", "FastAPI", "NLP", "Transformer Models", "AWS", "REST API"],
    details: [
      "Extract medical conditions and procedures from clinical text",
      "Predict appropriate ICD-10 and CPT codes with confidence scores",
      "Provide explanations for code predictions",
      "Support for batch processing of clinical documents",
      "AWS SageMaker integration for scalable deployment",
      "Context-aware predictions based on clinical text analysis",
      "Interactive web interface for instant predictions",
      "FastAPI Web Service with HTML interface for user-friendly access",
      "Keyword Analysis with context-based prediction system"
    ],
    overview: "Medical coding is a critical process in healthcare that involves translating clinical documentation into standardized codes for billing, research, and administrative purposes. This project aims to automate this process using state-of-the-art NLP techniques."
  },
  {
    title: "Medical Knowledge Chatbot",
    description: "A sophisticated chatbot application that leverages AI to provide medical knowledge and information to users.",
    tech: ["Node.js", "Express.js", "React", "TypeScript", "AWS Bedrock", "DynamoDB", "Redis", "OpenSearch", "Material-UI"],
    details: [
      "Real-time chat interface with AI-powered responses",
      "Medical knowledge base integration with OpenSearch",
      "User authentication using JWT and session management",
      "Rate limiting, request validation, and comprehensive error handling",
      "React with TypeScript and Material-UI for the frontend",
      "React Query for state management"
    ],
    overview: "Access to reliable medical information is crucial for both healthcare professionals and patients. This project delivers an intelligent chatbot powered by AWS Bedrock generative AI that retrieves and communicates accurate medical information from a curated knowledge base. The system combines the power of large language models with domain-specific medical data to provide contextually relevant responses while maintaining appropriate medical disclaimers and referring users to seek professional medical advice when appropriate."
  },
  {
    title: "Predictive Analytics Platform",
    description: "Built a machine learning platform for predictive analytics in business.",
    tech: ["Python", "Scikit-learn", "pandas"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  
                  {project.overview && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-primary-light mb-2">Project Overview:</h4>
                      <p className="text-sm text-gray-300">{project.overview}</p>
                    </div>
                  )}
                  
                  {project.details && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-primary-light mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                        {project.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary-light border border-primary/20"
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
