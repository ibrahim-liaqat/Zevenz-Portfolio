import { useEffect, useRef, useState } from 'react';
import { Clock, Users, Shield, Headphones, Tag } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'We prioritize quick turnaround times without compromising on quality, ensuring your projects launch on schedule.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team consists of seasoned professionals with years of experience in cutting-edge technologies.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure every project meets the highest standards.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock support to address any issues and ensure smooth operation of your solutions.',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description: 'Transparent, competitive pricing with no hidden costs. Get the best value for your investment.',
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gray-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Sticky Title */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2
              className={`text-4xl lg:text-5xl font-semibold text-black mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              Why Choose Zevenz
            </h2>
            <p
              className={`text-lg text-gray-600 max-w-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              We deliver exceptional results through innovation, expertise, and dedication
            </p>

            {/* Decorative Element */}
            <div
              className={`hidden lg:block mt-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-2 border-gray-200 rounded-full animate-pulse" />
                <div className="absolute inset-4 border border-gray-300 rounded-full" />
                <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                    transform: isVisible
                      ? hoveredIndex === index
                        ? 'translateX(-10px) translateY(-5px)'
                        : 'translateX(0) translateY(0)'
                      : 'translateX(80px) rotate(3deg)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative p-6 lg:p-8 rounded-2xl bg-white border transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'border-black shadow-glass-lg'
                        : 'border-gray-100 shadow-glass'
                    }`}
                  >
                    {/* Left Border Accent */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-black rounded-full transition-all duration-500 ${
                        hoveredIndex === index ? 'h-12' : 'h-0'
                      }`}
                    />

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-500 ${
                          hoveredIndex === index ? 'bg-black scale-110' : ''
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-500 ${
                            hoveredIndex === index ? 'text-white' : 'text-black'
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
