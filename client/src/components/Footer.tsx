import { Link } from "wouter";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  FileText, 
  Mail 
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Lab Website", href: "#" },
  { label: "Student Resources", href: "#" },
  { label: "Dataset Access", href: "#" },
  { label: "Code Repositories", href: "#" },
];

const socialLinks = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "github", href: "#", label: "GitHub" },
  { icon: "fileText", href: "#", label: "ResearchGate" },
  { icon: "mail", href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Jane Smith</h3>
            <p className="text-slate-300">
              Associate Professor<br />
              Department of Computer Science<br />
              Stanford University
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                // Render appropriate icon based on the icon name
                let Icon;
                switch(social.icon) {
                  case 'linkedin':
                    Icon = <Linkedin className="h-5 w-5" />;
                    break;
                  case 'twitter':
                    Icon = <Twitter className="h-5 w-5" />;
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
                    href={social.href} 
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors"
                  >
                    {Icon}
                  </a>
                );
              })}
            </div>
            <p className="text-slate-400 text-sm">
              Subscribe to my newsletter for updates on research and publications.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Dr. Jane Smith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
