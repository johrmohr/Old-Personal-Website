import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Papers", href: "/publications" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md border-b border-slate-200 transition-all duration-200",
        scrolled ? "bg-white/80 shadow-sm" : "bg-white/60"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Jordan Moreno
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-slate-700 hover:text-primary transition-colors font-medium",
                      location === item.href && "text-primary font-semibold"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden py-4 animate-in fade-in-10 slide-in-from-top-5",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="space-y-4 px-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors",
                    location === item.href && "bg-slate-100 text-primary font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
