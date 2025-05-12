import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professorData } from "@/data/profileData";

export default function CV() {
  return (
    <section id="cv" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 -skew-x-12 transform origin-top-right"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Curriculum Vitae</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Positions</h3>
            <div className="space-y-6">
              {professorData.cv.positions.map((position, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="font-semibold text-slate-900">{position.title}</h4>
                  <div className="text-primary-700">{position.institution}</div>
                  <div className="text-sm text-slate-500 mb-2">{position.period}</div>
                  <p className="text-slate-700">
                    {position.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Awards & Honors</h3>
            <ul className="space-y-3">
              {professorData.cv.awards.map((award, index) => (
                <motion.li 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-secondary-600"></div>
                  </div>
                  <div className="ml-3">
                    <span className="font-medium">{award.title}</span> — {award.description} ({award.year})
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Professional Service</h3>
            <ul className="space-y-3">
              {professorData.cv.service.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                  </div>
                  <div className="ml-3">
                    <span className="font-medium">{service.role}</span> — {service.organization}, {service.period}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Full CV (PDF)
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
