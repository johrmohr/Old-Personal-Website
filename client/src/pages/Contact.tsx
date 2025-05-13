import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, FileText } from "lucide-react";
import { professorData } from "@/data/profileData";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-lg text-slate-700 mb-8">
              I'm always interested in opportunities, research, and discussing shared interests. 
                Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <a href={`tel:${professorData.contact.phoneNumber.replace(/[()-\s]/g, '')}`} className="text-primary hover:text-primary-800">
                    {professorData.contact.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <a href={`mailto:${professorData.contact.email}`} className="text-primary hover:text-primary-800">
                    {professorData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-900">Connect</h3>
              <div className="flex space-x-4">
                {professorData.contact.socialLinks.map((social, index) => {
                  let Icon;
                  switch(social.icon) {
                    case 'linkedin':
                      Icon = <Linkedin className="h-5 w-5" />;
                      break;
                    case 'github':
                      Icon = <Github className="h-5 w-5" />;
                      break;
                    case 'fileText':
                      Icon = <FileText className="h-5 w-5" />;
                      break;
                    case 'mail':
                      Icon = <Mail className="h-5 w-5" />;
                      break;
                    default:
                      Icon = null;
                  }

                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      aria-label={social.name}
                      className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-100 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{social.name}</span>
                      {Icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
