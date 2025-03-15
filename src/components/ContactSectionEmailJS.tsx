import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import SocialLinks from "./SocialLinks";

const ContactSectionEmailJS = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials from your dashboard
      // Service ID: Found in Email Services tab (e.g., 'service_a1b2c3d')
      // Template ID: Found in Email Templates tab (e.g., 'template_x1y2z3')
      // Public Key: Found in Account > API Keys (e.g., 'AbCdEfGhIjKlMnOp')
      const result = await emailjs.sendForm(
        'service_0xhspc6', 
        'template_6tf1sst',
        formRef.current,
        'ioN-aNT30z350tn_A'
      );

      if (result.text !== 'OK') throw new Error('Failed to send message');

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Clear form
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary">
            Get in Touch
          </h2>
          
          <SocialLinks />
          
          <div className="glass-effect p-5 sm:p-8 rounded-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[120px] sm:min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white neon-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSectionEmailJS; 