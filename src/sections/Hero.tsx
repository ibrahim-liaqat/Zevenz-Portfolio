import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
];

// ✅ Typed cubic-bezier easing (IMPORTANT)
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Animation variants
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateY: -30,
    scale: 0.9,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateY: index % 2 === 0 ? -5 : 5,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.6 + index * 0.15,
      ease: smoothEase,
    },
  }),
};

export default function Hero() {
  const [,setIsLoaded] = useState(false);
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1.1, y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 2 },
            scale: { duration: 2 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1, y: [0, 20, 0] }}
          transition={{
            opacity: { duration: 2, delay: 0.5 },
            scale: { duration: 2, delay: 0.5 },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl"
        />

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
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Innovative Technology Solutions
              </span>
            </motion.div>

            <div className="space-y-2">
              {['Transform Your', 'Ideas Into', 'Digital Reality'].map((line) => (
                <motion.h1
                  key={line}
                  variants={fadeInUp}
                  className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black leading-[1.1]"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-lg"
            >
              We build web apps, mobile apps, AI solutions, and scalable digital
              products that help businesses grow.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div className="grid grid-cols-2 gap-4">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={`Hero ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center text-gray-400 hover:text-black"
        >
          <span className="text-xs uppercase">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </motion.section>
  );
}
