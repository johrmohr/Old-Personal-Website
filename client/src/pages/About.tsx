import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { professorData } from "@/data/profileData";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">About Me</h2>
          
          <div className="prose prose-slate prose-lg max-w-none">
            {professorData.about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Research Interests</h3>
            
            <ul className="space-y-2 list-none pl-0">
              {professorData.about.researchInterests.map((interest, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{interest}</span>
                </motion.li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Education</h3>
            
            <ul className="space-y-4 list-none pl-0">
              {professorData.about.education.map((edu, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-primary">{edu.institution}</div>
                  <div className="text-sm text-slate-500">{edu.years}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
