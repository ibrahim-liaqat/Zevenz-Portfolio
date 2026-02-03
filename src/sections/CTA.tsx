import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
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
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Orbs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800/50 to-transparent blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800/50 to-transparent blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gray-700/30 to-transparent blur-3xl animate-float"
          style={{ animationDelay: '6s' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm font-medium text-white/80">Let's Work Together</span>
          </div>

          {/* Headline */}
          <h2
            className={`text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to Transform
            <br />
            Your Business?
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-white/60 max-w-xl mx-auto mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Let's discuss your project and see how we can help you achieve your goals 
            with cutting-edge technology solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-glow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>

          {/* Contact Info */}
          <div
            className={`mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="text-center">
              <p className="text-white/40 text-sm mb-1">Email</p>
              <a
                href="mailto:info@zevenz.uk"
                className="text-white font-medium hover:text-white/80 transition-colors"
              >
                info@zevenz.uk
              </a>
            </div>
            <div className="text-center">
              <p className="text-white/40 text-sm mb-1">Phone</p>
              <a
                href="tel:+923011206519"
                className="text-white font-medium hover:text-white/80 transition-colors"
              >
                +92 301-1206519
              </a>
            </div>
            <div className="text-center">
              <p className="text-white/40 text-sm mb-1">Location</p>
              <p className="text-white font-medium">Pakistan, UK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div
        className={`absolute top-20 left-20 w-4 h-4 rounded-full bg-white/20 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '500ms', animation: 'float 8s ease-in-out infinite' }}
      />
      <div
        className={`absolute bottom-20 right-20 w-6 h-6 rounded-full bg-white/10 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '700ms', animation: 'float 10s ease-in-out infinite' }}
      />
      <div
        className={`absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white/15 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '900ms', animation: 'float 6s ease-in-out infinite' }}
      />
    </section>
  );
}
