import { useRef, useState } from 'react';
import { Monitor, Smartphone, Brain, MonitorDot, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Brain,
    title: 'AI & Data Solutions',
    description: 'Advanced analytics, machine learning, and AI solutions to unlock insights from your data.',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: MonitorDot,
    title: 'Desktop Applications',
    description: 'Cross-platform desktop applications using Electron, .NET, and other modern frameworks.',
    color: 'from-orange-500/10 to-amber-500/10',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateY: -20, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateY: index < 2 ? -3 : 3,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.4 + index * 0.15,
      ease: [0.16, 1, 0.3, 1] as any
    }
  })
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      id="services"
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-semibold text-black mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600"
          >
            Comprehensive tech solutions tailored to your business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-container">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 0,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative h-full p-8 rounded-3xl bg-white border transition-all duration-500 ${hoveredIndex === index
                    ? 'shadow-glass-lg border-gray-200'
                    : 'border-gray-100 shadow-glass'
                    }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 3 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black group/link"
                    >
                      <span className="animated-underline">Learn More</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 4 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
