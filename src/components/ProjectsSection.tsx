import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "Full Stack Goat - AI Solutions & Web Development",
    description: "A modern React-based landing page for Full Stack Goat, showcasing AI services, web development offerings, and providing lead capture functionality through contact forms and direct scheduling.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Framer Motion", "EmailJS", "React Router DOM", "React Hook Form", "TanStack Query", "Next Themes", "Canvas Confetti", "Lucide React"],
    details: [
      "Modern UI/UX design with sleek, responsive interface and interactive elements",
      "Service showcase highlighting AI and web development offerings with feature sections",
      "Flexible pricing plans with business and personal packages and toggle options",
      "Lead capture through contact form with EmailJS integration",
      "Calendly integration for direct meeting scheduling",
      "Custom quote request functionality",
      "Interactive animations and transitions for an engaging user experience",
      "Fully optimized for all device sizes with mobile-first approach",
      "Dark/Light mode theme toggling for user preference"
    ],
    overview: "Full Stack Goat is a professional landing page designed to showcase AI solution services and web development offerings. The site features modern design elements, interactive components, and lead generation functionality through multiple channels including direct contact forms and appointment scheduling. Built with React 18 and TypeScript, the site demonstrates best practices in modern web development with a focus on performance and user experience."
  },
  {
    title: "Secure AI-Powered Medical Documentation Audit",
    description: "An AWS-based system that automatically scans clinical documents and detects compliance violations, such as missing consents and unauthorized access, with a modern React frontend for document management and compliance reporting.",
    tech: ["React", "TypeScript", "Material UI", "AWS Textract", "AWS Comprehend Medical", "AWS Lambda", "S3", "API Gateway", "Node.js", "Express", "IAM", "CloudFormation"],
    details: [
      "Automated document analysis for consent forms, medical histories, and treatment plans",
      "Real-time compliance verification for missing signatures, expired consents, and unauthorized disclosures",
      "Interactive dashboard with compliance metrics, document activities, and trend analysis",
      "Comprehensive reporting with filtering and export capabilities",
      "Secure document management with appropriate security controls",
      "Document OCR and processing via AWS Textract",
      "Medical entity extraction using AWS Comprehend Medical",
      "Compliance violation detection with severity levels",
      "Modern React frontend with Material UI components and data grids"
    ],
    overview: "The Secure AI-Powered Medical Documentation Audit system provides healthcare organizations with an automated solution for ensuring regulatory compliance in medical documentation. This application leverages artificial intelligence to analyze medical documents, identify potential compliance issues, and generate detailed reports to help healthcare providers maintain adherence to industry regulations."
  },
  {
    title: "EHR Data Extraction & Summarization",
    description: "A modern application for extracting structured data and generating summaries from medical text documents using large language models.",
    tech: ["Python", "FastAPI", "AWS Bedrock", "Claude 3", "MongoDB", "JWT", "Bootstrap 5", "Uvicorn", "Pydantic"],
    details: [
      "Extract patient demographics, chief complaints, symptoms, and medical history",
      "List current medications, allergies, and vital signs",
      "Document assessment and plan from medical text",
      "Generate audience-specific summaries (physician, patient, or nurse-focused)",
      "Configure summary length and focus areas",
      "Clean, modern interface for demonstrations and testing",
      "Fully functional mock mode for demonstrations without LLM access",
      "Realistic data generation for testing purposes",
      "Toggle features via environment variables"
    ],
    overview: "This project provides a system for processing Electronic Health Records (EHR) and clinical notes to extract structured data from unstructured medical text and generate context-aware summaries for different audience types. The application integrates AWS Bedrock's Claude 3 Sonnet model with a FastAPI backend and a Bootstrap 5 frontend to deliver a modern, user-friendly experience for healthcare professionals."
  },
  {
    title: "Streetliner Performance Inc. Website",
    description: "Developed a responsive website for Streetliner Performance Inc., an automotive performance shop located in Gardena, CA.",
    tech: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Calendly", "Python", "Responsive Design"],
    details: [
      "Responsive design with mobile-first approach that works seamlessly across all devices",
      "Interactive elements including animated hamburger menu, advanced image lightbox, and touch-enabled navigation",
      "Services slider with detailed information and dynamic portfolio grid",
      "Performance optimizations with compressed images, optimized CSS, and semantic HTML",
      "Calendly integration for scheduling appointments directly from the website",
      "Google Maps integration with interactive location display",
      "Custom animations with smooth transitions and hover effects",
      "Improved image gallery with keyboard and touch navigation",
      "Contact form with client-side validation"
    ],
    overview: "This project showcases a modern, responsive website for an automotive performance shop. The website features a clean, professional design with interactive elements and integrations with third-party services like Calendly and Google Maps. The mobile-first approach ensures the site works seamlessly across all devices, while performance optimizations ensure fast loading times."
  },
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
  }
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
