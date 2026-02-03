import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 40, rotateY: -30, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateY: index % 2 === 0 ? -5 : 5,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.6 + index * 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.5,
            scale: 1.1,
            y: [0, -20, 0]
          }}
          transition={{
            opacity: { duration: 2 },
            scale: { duration: 2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            y: [0, 20, 0]
          }}
          transition={{
            opacity: { duration: 2, delay: 0.5 },
            scale: { duration: 2, delay: 0.5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-200/30 to-transparent blur-2xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative w-full px-6 lg:px-12 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Innovative Technology Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              {['Transform Your', 'Ideas Into', 'Digital Reality'].map((line, index) => (
                <motion.h1
                  key={index}
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black leading-[1.1]"
                >
                  {line}
                </motion.h1>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-lg leading-relaxed">
              We're a leading tech company specializing in web development, mobile apps, 
              AI & Data Solutions, and cutting-edge digital solutions that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-glow"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-black font-medium rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>

            {/* Tech Stack Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {['Web Development', 'Mobile Apps', 'AI Solutions', 'Desktop Apps'].map((tag, index) => (
                <motion.span
                  key={tag}
                  variants={fadeInUp}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white/50 border border-gray-200 rounded-full hover:border-gray-400 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            variants={fadeInUp}
            className="relative perspective-container"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={image}
                      alt={`Technology ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 glass-card-dark rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Projects</p>
                  <p className="text-white/60 text-sm">Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
        </button>
      </motion.div>
    </motion.section>
  );
}
