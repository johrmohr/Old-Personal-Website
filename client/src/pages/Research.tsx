import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { professorData } from "@/data/profileData";

export default function Research() {
  return (
    <section id="research" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">My Research</h2>
          
          <Card className="mb-12 overflow-hidden">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary to-primary-600 h-48 md:h-64">
                <div className="container h-full flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold">Analysis of Neural Network Performance in Image Recognition</h3>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-8">
                {/* PDF Poster (Full Width) */}
                <div className="w-full rounded-lg overflow-hidden border-4 border-slate-200 h-[600px]">
                  <iframe 
                    src="/Research Poster.pdf" 
                    title="Research Poster"
                    className="w-full h-full"
                    style={{ minHeight: "600px" }}
                  />
                </div>
                
                {/* Research Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Research Overview</h4>
                        <p className="text-slate-700">
                          Led computational modeling research, utilizing 20μm × 20μm grid networks to study cell-substrate interactions.
                          Analyzed cell migration across multiple fiber configurations, measuring displacements up to 150μm and orientation distributions across 360◦ to map movement patterns.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Key Findings</h4>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li>Identified substrate stiffness variations of 5-20 kPa significantly impacting cell migration behavior and displacement trajectories in fiber networks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-slate-100 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Research Period</h4>
                      <div className="flex items-center text-sm text-slate-700">
                        <Calendar className="h-4 w-4 mr-2" /> Summer 2024
                      </div>
                      <div className="mt-3">
                        <h4 className="text-sm font-medium text-slate-900 mb-2">Supervised By</h4>
                        <p className="text-sm text-slate-700">Prof. Jia Gou, Ph.D.</p>
                        <p className="text-sm text-slate-700">Interdisciplinary Center for Quantitative Modeling in Biology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
