
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const certificates = [
  {
    name: "AWS Solutions Architect Associate",
    issueDate: "2024",
    validUntil: "2027",
    level: "Associate",
    description: "Design of distributed systems and complex AWS architectures",
    verificationUrl: "https://credly.com/earner/earned/badge/e2129bb0-10e8-4c3f-b94d-91b6b944a4cb",
  },
  {
    name: "AWS Machine Learning Engineer Associate",
    issueDate: "2025",
    validUntil: "2028",
    level: "Associate",
    description: "Development, training, deployment, and optimization of machine learning models on AWS",
    verificationUrl: "https://www.credly.com/earner/earned/badge/0dd87538-6a89-4721-b2c7-0dab426ca8f4",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issueDate: "2024",
    validUntil: "2027",
    level: "Practitioner",
    description: "Foundational AWS knowledge, including cloud concepts, security, pricing, and support",
    verificationUrl: "https://www.credly.com/earner/earned/badge/d4c3a1bb-2960-4942-9362-5339fee3fc44",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issueDate: "2024",
    validUntil: "2027",
    level: "Associate",
    description: "Infrastructure as Code (IaC) using Terraform for cloud provisioning and automation",
    verificationUrl: "https://www.credly.com/earner/earned/badge/237993b8-cc0e-40c2-9553-f489212cddcd",
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
          Professional Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
