
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const certificates = [
  {
    name: "AWS Solutions Architect Professional",
    issueDate: "2024",
    validUntil: "2027",
    level: "Professional",
    description: "Design of distributed systems and complex AWS architectures",
    verificationUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "AWS DevOps Engineer Professional",
    issueDate: "2023",
    validUntil: "2026",
    level: "Professional",
    description: "Implementation of continuous delivery systems and methodologies on AWS",
    verificationUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "AWS Security Specialty",
    issueDate: "2023",
    validUntil: "2026",
    level: "Specialty",
    description: "Security best practices and specialized data protection mechanisms",
    verificationUrl: "https://aws.amazon.com/verification",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary"
        >
          AWS Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect hover:shadow-glow transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl font-semibold text-white">
                      {cert.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">
                    {cert.description}
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-400">
                      Level: <span className="text-primary-light">{cert.level}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Issued: <span className="text-primary-light">{cert.issueDate}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Valid until: <span className="text-primary-light">{cert.validUntil}</span>
                    </p>
                  </div>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary-light transition-colors"
                  >
                    Verify <ExternalLink className="w-4 h-4" />
                  </a>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
