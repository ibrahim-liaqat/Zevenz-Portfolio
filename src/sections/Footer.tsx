import { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/zevenz_uk', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/zevenz', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/FAIZAN-Bor', label: 'GitHub' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-8 overflow-hidden bg-white border-t border-gray-100"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Brand Column */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-semibold text-black">Zevenz</span>
            </a>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-8">
              Leading the digital transformation with innovative web development,
              mobile apps, AI & Data Solutions, and cutting-edge technology solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    style={{
                      transitionDelay: `${300 + index * 100}ms`,
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`group inline-flex items-center gap-2 text-gray-600 hover:text-black transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <span className="animated-underline">{link.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info Column */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Email</p>
                <a
                  href="mailto:info@zevenz.uk"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  info@zevenz.uk
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Phone</p>
                <a
                  href="tel:+923011206519"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  +92 301-1206519
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Location</p>
                <p className="text-gray-700">Pakistan, UK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gray-200 mb-8 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
            }`}
          style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        />

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Zevenz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors animated-underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors animated-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
