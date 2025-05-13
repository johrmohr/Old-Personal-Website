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
  { label: "Papers", href: "/publications" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "github", href: "#", label: "GitHub" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">

          {/* Name & School Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jordan Moreno</h3>
            <p className="text-slate-300 space-y-1">
              <span className="block">Undergraduate Student</span>
              <span className="block font-medium">
                Donald Bren School of ICS
              </span>
              <span className="block">University of California, Irvine</span>
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              {socialLinks.map((social, index) => {
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
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Jordan Moreno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
