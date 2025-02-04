import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary">
            Get in Touch
          </h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:paul.gipson@example.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
          </div>
          <div className="glass-effect p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Name" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400" />
              </div>
              <div>
                <Textarea placeholder="Message" className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white neon-glow">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;