import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { professorData } from "@/data/profileData";

export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Papers</h2>
          
          <div className="space-y-6">
            {professorData.publications.map((publication, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-slate-700 mb-4">
                      {publication.authors}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500 mb-4">
                      <span className="font-medium">{publication.journal}</span> • {publication.year}
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-primary hover:text-primary-800 text-sm font-medium flex items-center">
                        <FileText className="h-4 w-4 mr-1" /> View PDF
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <div className="bg-slate-100 rounded-md p-2 w-24 h-24 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-slate-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}