import { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Brain, MonitorDot, ArrowRight, Check, Code, Database, Cloud, Shield, Zap } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Create powerful, scalable web applications that deliver exceptional user experiences. Our full-stack development expertise ensures your web presence stands out in the digital landscape.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
    ],
    technologies: ['React.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Build engaging mobile applications that reach your audience wherever they are. Our cross-platform approach ensures maximum reach with minimal development time.',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'iOS', 'Android'],
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Brain,
    title: 'AI & Data Solutions',
    description: 'Unlock the power of your data with advanced analytics, machine learning, and AI solutions. Transform raw data into actionable insights that drive business growth.',
    features: [
      'Predictive Analytics',
      'Machine Learning Models',
      'Data Visualization',
      'AI Integration',
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'PyTorch'],
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: MonitorDot,
    title: 'Desktop Applications',
    description: 'Powerful desktop applications that run seamlessly across Windows, macOS, and Linux. Build robust solutions for complex business workflows and specialized requirements.',
    features: [
      'Cross-Platform Development',
      'Enterprise Solutions',
      'Database Integration',
      'Custom UI/UX',
    ],
    technologies: ['Electron', '.NET', 'Java', 'Python', 'C++', 'Rust', 'Qt'],
    color: 'from-orange-500/10 to-amber-500/10',
  },
];

const additionalFeatures = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'We write maintainable, scalable code following best practices.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture for optimal performance.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security in every solution.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized applications for speed and efficiency.',
  },
  {
    icon: Check,
    title: 'Quality Assurance',
    description: 'Rigorous testing to ensure reliability.',
  },
];

export default function Services() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [servicesHeaderVisible, setServicesHeaderVisible] = useState(false);
  const [servicesListVisible, setServicesListVisible] = useState<boolean[]>(new Array(mainServices.length).fill(false));
  const [techStackVisible, setTechStackVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<Array<HTMLDivElement | null>>([]);
  const techStackRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === servicesHeaderRef.current) setServicesHeaderVisible(true);
          if (entry.target === techStackRef.current) setTechStackVisible(true);
          if (entry.target === featuresRef.current) setFeaturesVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);

          // Check for individual service items
          const serviceIndex = servicesListRef.current.indexOf(entry.target as HTMLDivElement);
          if (serviceIndex !== -1) {
            setServicesListVisible(prev => {
              const newState = [...prev];
              newState[serviceIndex] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          } else {
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    if (servicesHeaderRef.current) observer.observe(servicesHeaderRef.current);
    if (techStackRef.current) observer.observe(techStackRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    servicesListRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <PageWrapper>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12 py-20">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Professional Tech Solutions</span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight tracking-tight transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                Our Services
              </h1>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                Comprehensive technology solutions designed to accelerate your business growth and drive digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div
              ref={servicesHeaderRef}
              className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-700 ${servicesHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight">
                Transforming Ideas Into Digital Solutions
              </h2>
              <p className="text-lg text-gray-600 font-light" style={{ transitionDelay: '200ms' }}>
                At Zevenz, we offer a comprehensive suite of technology services that cover every aspect of your digital journey.
              </p>
            </div>

            <div className="space-y-24 lg:space-y-32">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.title}
                    ref={el => { servicesListRef.current[index] = el; }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                  >
                    {/* Content */}
                    <div
                      className={`transition-all duration-1000 ${isEven ? 'lg:order-1' : 'lg:order-2'} ${servicesListVisible[index] ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`}`}
                    >
                      <div className="relative p-10 lg:p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-glass-sm hover:shadow-glass-lg transition-all duration-500">
                        <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${service.color} opacity-30`} />
                        <div className="relative z-10">
                          <div className={`w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">{service.title}</h3>
                          <p className="text-gray-600 leading-relaxed mb-10 text-lg font-light">{service.description}</p>

                          <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-4 h-4 text-black" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Core Technologies</p>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <span key={tech} className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-black hover:text-white">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`transition-all duration-1000 ${isEven ? 'lg:order-2' : 'lg:order-1'} ${servicesListVisible[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                      <div className="relative aspect-square max-w-md mx-auto">
                        <div
                          className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br ${service.color} opacity-40 blur-2xl animate-spin-slow`}
                          style={{ animationDuration: '8s' }}
                        />
                        <div className="relative h-full w-full rounded-[3rem] bg-white border border-gray-100 shadow-glass flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                          <div className="w-40 h-40 rounded-[2.5rem] bg-black flex items-center justify-center shadow-2xl transition-transform duration-500 hover:scale-110">
                            <Icon className="w-20 h-20 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section
          ref={techStackRef}
          className="relative py-16 lg:py-24 overflow-hidden bg-black"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${techStackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">Tech Ecosystem</h2>
              <p className="text-lg text-white/60 font-light">We leverage industry-standard tools to build future-proof solutions</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {[
                { name: 'React', slug: 'react' },
                { name: 'Node.js', slug: 'nodedotjs' },
                { name: 'Python', slug: 'python' },
                { name: 'Firebase', slug: 'firebase' },
                { name: 'AWS', slug: 'amazonwebservices' },
                { name: 'MongoDB', slug: 'mongodb' },
                { name: 'PostgreSQL', slug: 'postgresql' },
                { name: 'GitHub', slug: 'github' },
                { name: 'Docker', slug: 'docker' },
                { name: 'AI', slug: 'openai' },
                { name: 'Next.js', slug: 'nextdotjs' },
                { name: 'TypeScript', slug: 'typescript' }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`p-4 sm:p-5 rounded-3xl bg-white/5 border border-white/10 transition-all duration-700 text-center shadow-lg hover:-translate-y-1 hover:bg-white/10 ${techStackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 flex items-center justify-center p-2.5">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                      alt={tech.name}
                      className={`w-full h-full object-contain ${tech.name === 'OpenAI' || tech.name === 'AWS' ? 'brightness-150 contrast-125' : ''
                        } ${tech.name === 'OpenAI' ? 'scale-[0.85]' : ''}`}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-white uppercase tracking-normal block leading-tight">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section
          ref={featuresRef}
          className="relative py-24 lg:py-32 overflow-hidden bg-gray-50/50"
        >
          <div className="relative w-full px-6 lg:px-12">
            <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight">Engineered for Excellence</h2>
              <p className="text-lg text-gray-600 font-light">Our core principles ensure every project we deliver is of the highest quality</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative p-8 lg:p-10 rounded-[2rem] bg-white border border-gray-100/80 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-black/5 overflow-hidden ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Corner decorative blob */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-black/20 transition-all duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors duration-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-4xl lg:text-6xl font-semibold text-white mb-6 tracking-tight transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Transform Your Vision</h2>
              <p className={`text-lg text-white/60 max-w-xl mx-auto mb-10 font-light transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Ready to take your business to the next level? Our team is standing by to help you choose the right tech strategy.
              </p>
              <div className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
                <Link
                  to="/contact"
                  className="magnetic-btn group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl shadow-white/10"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
