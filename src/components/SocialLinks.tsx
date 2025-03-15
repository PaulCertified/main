import React from 'react';
import { Mail, Linkedin, Github } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-8 mb-8">
      <a 
        href="mailto:ipaulgipson@gmail.com" 
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-300"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/paulcertified/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a 
        href="https://github.com/PaulCertified" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-300"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
    </div>
  );
};

export default SocialLinks; 