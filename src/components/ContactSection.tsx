import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-8">Get in Touch</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:paul.gipson@example.com" className="text-primary hover:text-primary/80">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Github size={24} />
            </a>
          </div>
          <form className="space-y-6 text-left">
            <div>
              <Input type="text" placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Textarea placeholder="Message" className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;