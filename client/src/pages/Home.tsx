import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professorData } from "@/data/profileData";

export default function Home() {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              {professorData.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-primary">
              {professorData.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              {professorData.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/publications" className="flex items-center gap-2">
                  View Publications <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full opacity-70" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full opacity-70" />
            <div className="relative rounded-lg overflow-hidden border-8 border-white shadow-xl aspect-square">
              <img 
                src="/Jordan.JPG" 
                alt={professorData.name} 
                className="w-full h-full object-cover"
                width="600"
                height="600"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
