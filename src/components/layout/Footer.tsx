import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/zevenz.uk', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/zevenz', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/FAIZAN-Bor', label: 'GitHub' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-6 overflow-hidden bg-white border-t border-gray-100">
      <div className="w-full px-6 lg:px-12">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-8"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 90 }}
                className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-xl">Z</span>
              </motion.div>
              <span className="text-2xl font-bold text-black tracking-tight">Zevenz</span>
            </Link>

            <p className="text-gray-500 text-base leading-relaxed font-light mb-4">
              Leading the digital transformation with innovative solutions and cutting-edge technology.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ rotate: 12, scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black border border-gray-100 hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group flex items-center justify-between text-gray-600 hover:text-black transition-all text-sm"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services Quick View */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Services</h3>
            <nav className="flex flex-col gap-3">
              {['Web Design', 'Mobile Development', 'AI Solutions', 'Cloud Services', 'UI/UX Design'].map((item) => (
                <Link key={item} to="/services" className="text-gray-600 hover:text-black transition-all text-sm">
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Quick View */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="group">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Email</p>
                <a href="mailto:info@zevenz.uk" className="text-base text-black hover:text-gray-600 transition-colors">
                  info@zevenz.uk
                </a>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Phone</p>
                <a href="tel:+923011206519" className="text-base text-black hover:text-gray-600 transition-colors">
                  +92 301 1206519
                </a>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Office</p>
                <p className="text-base text-black">Faisalabad, Pakistan</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Zevenz. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-gray-500 hover:text-black transition-colors text-sm">Privacy Policy</Link>
              <Link to="/" className="text-gray-500 hover:text-black transition-colors text-sm">Terms of Use</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
