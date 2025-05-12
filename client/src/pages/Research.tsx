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
                    <Badge className="mb-3 bg-white/20 hover:bg-white/30 text-white">Active Research</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold">Analysis of Neural Network Performance in Image Recognition</h3>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Research Overview</h4>
                      <p className="text-slate-700">
                        This research project explores the effectiveness of various neural network architectures
                        in image recognition tasks. I focused on comparing different CNN models and their performance
                        on standardized datasets, with particular attention to accuracy rates and computational efficiency.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Key Findings</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Demonstrated 15% improvement in image recognition accuracy using a modified ResNet architecture</li>
                        <li>Reduced computational requirements by 30% while maintaining performance metrics</li>
                        <li>Developed an optimized approach for low-resource deployment environments</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button asChild className="flex items-center gap-2">
                        <a href="/Research Poster.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" /> View Research Poster
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="order-first md:order-last">
                  <div className="aspect-square rounded-lg overflow-hidden border-4 border-slate-200">
                    <img 
                      src="/Jordan.JPG" 
                      alt="Researcher Portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 bg-slate-100 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Research Period</h4>
                    <div className="flex items-center text-sm text-slate-700">
                      <Calendar className="h-4 w-4 mr-2" /> 2022 - Present
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Supervised By</h4>
                      <p className="text-sm text-slate-700">Prof. Robert Johnson, Ph.D.</p>
                      <p className="text-sm text-slate-700">Department of Computer Science</p>
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
