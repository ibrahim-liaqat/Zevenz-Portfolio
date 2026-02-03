import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Monitor, Smartphone, Brain, MonitorDot, Rocket, Users, ShieldCheck, Headset, Banknote, RefreshCcw, ExternalLink, X, Check, Play, ChevronLeft, ChevronRight, LayoutGrid, Calendar, User, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Tilt from '../components/ui/Tilt';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
];

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
    link: '/services',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    link: '/services',
  },
  {
    icon: Brain,
    title: 'AI & Data',
    description: 'Advanced analytics, machine learning, and AI solutions to unlock insights from your data.',
    link: '/services',
  },
  {
    icon: MonitorDot,
    title: 'Desktop Apps',
    description: 'Cross-platform desktop applications using Electron, .NET, and other modern frameworks.',
    link: '/services',
  },
];

const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 7, suffix: '+', label: 'Team Members' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const projects = [
  {
    id: 'ecommerce',
    title: 'Smart BizTrack',
    subtitle: 'Complete General Grocery Management Solution',
    category: 'Web Development',
    tags: ['E-commerce', 'React', 'Node.js'],
    year: '2024',
    client: 'Zevenz Foundation',
    duration: '6 months',
    team: '3 developers',
    status: 'Completed',
    image: '/project-1.jpg',
    heroImage: '/project-1.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/sJDBQm9qDvE',
      description: 'See how Smart BizTrack transforms grocery management with its intuitive interface and powerful features'
    },
    description: 'A comprehensive grocery management platform built for a leading retail company, featuring a modern user interface, robust admin dashboard, and advanced analytics.',
    problem: 'Small business owners often struggle with keeping track of sales, expenses, inventory, and reports using manual methods or complex software. This leads to poor financial tracking, stock mismanagement, and delayed decision-making.',
    solution: 'BizTrack is a simple and smart web-based system that helps small business owners manage their daily sales, expenses, and inventory without hassle. It provides real-time tracking, easy report generation, and useful insights to support better business decisions.',
    features: [
      'Sales & Expense Tracking',
      'Inventory Management',
      'Reports & Analytics',
      'User-Friendly Dashboard',
      'Comprehensive admin dashboard',
      'Customer Management',
      'Employee Management'
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Socket.io'],
    results: [
      '150% increase in online sales',
      '40% improvement in conversion rate',
      '60% reduction in cart abandonment',
      '99.9% uptime since launch'
    ],
    testimonial: {
      text: "Zevenz transformed our operations. The interface is intuitive, and the real-time tracking has cut our manual work in half. Exceptional quality and support!",
      author: "Sheikh Jamal",
      position: "General Manager, Al-Madina Supermarket"
    }
  },
  {
    id: 'cryptoWallet',
    title: 'Decentralized Crypto Wallet',
    subtitle: 'Full-Stack Blockchain & Cryptocurrency Wallet',
    category: 'Web Development',
    tags: ['Blockchain', 'Rust', 'Web3'],
    year: '2024',
    client: 'FinBlock Solutions',
    duration: '4 months',
    team: 'Individual',
    status: 'Completed',
    image: '/project-2.jpg',
    heroImage: '/project-2.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/iFlqo0wJeJk',
      description: 'Demonstration of the decentralized wallet, blockchain mining, and Zakat transaction features.'
    },
    description: 'A fully functional decentralized cryptocurrency wallet featuring a custom blockchain, PoW mining, Zakat deduction system, and UTXO-based transactions.',
    problem: 'Need for a secure, domestic-style cryptocurrency system with built-in regulatory features like Zakat and strict identity verification.',
    solution: 'Built a full-stack application using Rust for the core blockchain/backend and React for the frontend, utilizing serverless databases.',
    features: [
      'Custom Blockchain & PoW Mining',
      'UTXO Transaction Model',
      'Digital Signatures (RSA/AES)',
      'Monthly Zakat 2.5% Auto-Deduction',
      'Public/Private Key Generation',
      'React + Tailwind Frontend',
      'Rust Backend with Serverless DB'
    ],
    techStack: ['React', 'Tailwind CSS', 'Rust', 'Go', 'Firebase', 'Supabase'],
    results: [
      'Implemented functional PoW blockchain',
      'Secure transaction processing',
      'Automated Zakat calculation',
      'Deployed on Vercel'
    ],
    testimonial: {
      text: "Zevenz delivered a robust, enterprise-grade blockchain solution. The custom Zakat integration is exactly what the market needed.",
      author: "Alexander Sterling",
      position: "Director, FinBlock Capital"
    }
  },
  {
    id: 'restaurantChatbot',
    title: 'Restaurant Chatbot Support',
    subtitle: 'AI-Powered Customer Support System using RAG',
    category: 'AI & Data Solutions',
    tags: ['RAG', 'Chatbot', 'NLP'],
    year: '2025',
    client: 'Internal Project',
    duration: '3 months',
    team: '2 AI Engineers',
    status: 'Prototype',
    image: '/project-3.jpg',
    heroImage: '/project-3.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/DT3ibs7k6jo',
      description: 'Demonstration of the RAG-based chatbot answering complex menu and reservation queries.'
    },
    description: 'An intelligent customer support chatbot designed for restaurants, utilizing Retrieval-Augmented Generation (RAG) to provide accurate answers about menus, ingredients, reservations, and timings.',
    problem: 'Restaurants often struggle with handling repetitive customer inquiries during peak hours, leading to missed reservations and frustrated customers.',
    solution: 'We implemented a RAG-based chatbot using LangChain and a Vector Database that retrieves relevant information to generate precise responses.',
    features: [
      'RAG-based Query Handling',
      'Menu & Ingredient Queries',
      'Reservation Assistance',
      'Multi-turn Conversation Context',
      'Natural Language Understanding',
      'Admin Dashboard for Knowledge Base'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'React', 'FastAPI'],
    results: [
      'Automated 70% of common queries',
      'Reduced average response time to 2s',
      'Improved satisfaction scores by 40%'
    ],
    testimonial: {
      text: "This chatbot manages our customer queries effortlessly given the complexity of our menu. It's like having a 24/7 concierge.",
      author: "Restaurant Manager",
      position: "The Dining Spot"
    }
  }
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || hasStarted) return;
    setHasStarted(true);
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (value - startValue) * easeProgress);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, hasStarted]);

  return <span className="tabular-nums">{count}{suffix}</span>;
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);


  const servicesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero section loads immediately
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    // Intersection Observer for scroll-triggered sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === servicesRef.current) setServicesVisible(true);
          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === whyUsRef.current) setWhyUsVisible(true);
          if (entry.target === portfolioRef.current) setPortfolioVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (whyUsRef.current) observer.observe(whyUsRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <PageWrapper>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-200/30 to-transparent blur-2xl animate-float" style={{ animationDelay: '4s' }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12 py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Innovative Technology Solutions</span>
                </div>

                <div className="space-y-2">
                  {['Transform Your', 'Ideas Into', 'Digital Reality'].map((line, index) => (
                    <h1
                      key={index}
                      className={`text-5xl sm:text-6xl lg:text-7xl font-semibold text-black leading-[1.1] transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${300 + index * 150}ms` }}
                    >
                      {line}
                    </h1>
                  ))}
                </div>

                <p className={`text-lg text-gray-600 max-w-lg leading-relaxed font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '800ms' }}>
                  We're a leading tech company specializing in web development, mobile apps, AI & Data Solutions, and cutting-edge digital solutions that drive business growth.
                </p>

                <div className={`flex flex-wrap gap-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '1000ms' }}>
                  <Link to="/portfolio" className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-glow">
                    View Our Work
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-black font-medium rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Right Content - Image Grid */}
              <div className={`relative transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '600ms' }}>
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-glass transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${800 + index * 150}ms` }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image}
                          alt={`Technology ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="eager"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>

                {/* Floating Stats Card */}
                <div className={`absolute -bottom-6 -left-6 lg:left-[-20px] glass-card-dark rounded-2xl p-5 shadow-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1400ms' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        <AnimatedCounter value={100} suffix="+" isVisible={heroVisible} />
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Projects</p>
                      <p className="text-white/60 text-sm">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1600ms' }}>
            <Link to="#services" className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
              <ChevronDown className="w-5 h-5 animate-bounce-subtle" />
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          ref={servicesRef}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className={`text-4xl lg:text-5xl font-semibold text-black mb-6 transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Our Services
              </h2>
              <p className={`text-lg text-gray-600 font-light transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Comprehensive tech solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <Link to={service.link} className="group block">
                      <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-glass transition-all duration-500 hover:shadow-glass-lg hover:border-gray-200 card-lift">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-black">
                            <span className="animated-underline">Learn More</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="relative py-20 lg:py-28 overflow-hidden bg-black"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter transition-all duration-700 ${statsVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                  </div>
                  <p className={`text-sm lg:text-base text-white/60 font-medium uppercase tracking-widest transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${800 + index * 150}ms` }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          ref={whyUsRef}
          className="py-24 lg:py-32 bg-gray-50/50"
        >
          <div className="w-full px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className={`relative order-2 lg:order-1 transition-all duration-700 ${whyUsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-100">
                  <img
                    src="/groupphoto.avif"
                    alt="Zevenz Team"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div>
                  <h2 className={`text-4xl lg:text-5xl font-semibold text-black mb-8 tracking-tight leading-tight transition-all duration-700 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Why Partners <span className="text-[#9ca3af]">Choose</span> Zevenz
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                    {[
                      { icon: Rocket, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality.' },
                      { icon: Users, title: 'Expert Team', desc: 'Seasoned professionals with years of experience.' },
                      { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing ensures the highest standards.' },
                      { icon: Headset, title: '24/7 Support', desc: 'Round-the-clock support to address any issues.' },
                      { icon: Banknote, title: 'Competitive Pricing', desc: 'Transparent pricing with no hidden costs.' },
                      { icon: RefreshCcw, title: 'Agile Methodology', desc: 'Flexible process that adapts to your needs.' },
                    ].map((item) => (
                      <motion.div key={item.title} variants={fadeInUp} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-glass flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-black mb-1.5 tracking-tight">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={portfolioRef}
          className="py-24 lg:py-32 bg-white"
        >
          <div className="w-full px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <div className={`max-w-2xl transition-all duration-700 ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight">Our Recent Work</h2>
                <p className="text-lg text-gray-600 font-light">
                  A selection of digital experiences we've crafted for clients across the globe.
                </p>
              </div>
              <div className={`transition-all duration-700 ${portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <Link to="/portfolio" className="group flex items-center gap-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors">
                  View All Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`cursor-pointer transition-all duration-700 ease-out ${portfolioVisible ? 'opacity-100 [transform:perspective(1000px)_rotateY(0deg)_scale(1)]' : 'opacity-0 [transform:perspective(1000px)_rotateY(90deg)_scale(0.8)]'}`}
                  style={{ transitionDelay: `${index * 500}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Tilt className="group relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-glass transition-all duration-500 hover:shadow-2xl hover:border-gray-200">
                    <div className="relative h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <span className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full shadow-lg">
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white rounded-full border border-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-light">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section
          ref={ctaRef}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to Transform<br />Your Business?
              </h2>
              <p className={`text-lg text-white/60 max-w-xl mx-auto mb-10 font-light transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Let's discuss your project and see how we can help you achieve your goals with cutting-edge technology solutions.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
                <Link to="/contact" className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-glow">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/portfolio" className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Project Modal */}
        {
          selectedProject && (
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto transition-opacity duration-300 animate-fade-in`}
              onClick={() => setSelectedProject(null)}
            >
              <button
                onClick={handlePrevProject}
                className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white transition-all duration-300 border border-white/20 z-50 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNextProject}
                className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white transition-all duration-300 border border-white/20 z-50 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div
                className="relative w-full max-w-5xl my-8 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-up"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/10 hover:bg-red-500 hover:text-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="overflow-y-auto max-h-[90vh]">
                  <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                    <img src={selectedProject.heroImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tight">{selectedProject.title}</h2>
                      <p className="text-xl text-white/80 font-light">{selectedProject.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-8 lg:p-16">
                    <div className="grid lg:grid-cols-3 gap-16">
                      <div className="lg:col-span-2 space-y-16">
                        <section>
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-2 h-8 bg-black rounded-full" />
                            <h3 className="text-3xl font-bold text-black tracking-tight">Project Overview</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-lg font-light">{selectedProject.description}</p>
                        </section>

                        <section className="grid sm:grid-cols-2 gap-8">
                          <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-bold text-black mb-4 tracking-tight">The Challenge</h4>
                            <p className="text-gray-600 leading-relaxed font-light">{selectedProject.problem}</p>
                          </div>
                          <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-bold text-black mb-4 tracking-tight">Our Solution</h4>
                            <p className="text-gray-600 leading-relaxed font-light">{selectedProject.solution}</p>
                          </div>
                        </section>

                        {selectedProject.demoVideo && (
                          <section>
                            <div className="flex items-center gap-4 mb-8">
                              <div className="w-2 h-8 bg-black rounded-full" />
                              <h3 className="text-3xl font-bold text-black tracking-tight">Demo Presentation</h3>
                            </div>
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group-hover:scale-[1.02] transition-transform duration-500">
                              <iframe
                                src={selectedProject.demoVideo.url}
                                title={`${selectedProject.title} Demo`}
                                className="w-full h-full"
                                allowFullScreen
                              />
                            </div>
                            <p className="mt-6 text-sm text-gray-400 italic flex items-center gap-3">
                              <Play className="w-5 h-5" />
                              {selectedProject.demoVideo.description || `Experience the ${selectedProject.title} in action`}
                            </p>
                          </section>
                        )}

                        <section>
                          <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-8 bg-black rounded-full" />
                            <h3 className="text-3xl font-bold text-black tracking-tight">Key Features</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {selectedProject.features.map((feature, idx) => (
                              <div key={idx} className="group flex items-center gap-5 p-5 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                  <Check className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-semibold">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </section>

                        <section>
                          <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-8 bg-black rounded-full" />
                            <h3 className="text-3xl font-bold text-black tracking-tight">Technology Stack</h3>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.techStack.map((tech) => (
                              <span key={tech} className="px-6 py-3 bg-black text-white text-sm font-bold rounded-2xl shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </section>
                      </div>

                      <div className="space-y-8">
                        <div className="p-10 rounded-[2rem] bg-white border border-gray-100 shadow-glass-sm space-y-8">
                          <h4 className="text-2xl font-bold text-black pb-4 border-b border-gray-100 tracking-tight">Project Details</h4>
                          <div className="space-y-6">
                            {[
                              { icon: User, label: 'Client', value: selectedProject.client },
                              { icon: LayoutGrid, label: 'Category', value: selectedProject.category },
                              { icon: Calendar, label: 'Duration', value: selectedProject.duration },
                              { icon: Check, label: 'Status', value: selectedProject.status, color: 'text-green-600' },
                            ].map((item, idx) => (
                              <div key={idx} className="flex flex-col gap-1">
                                <div className="flex items-center gap-3 text-gray-400">
                                  <item.icon className="w-4 h-4" />
                                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                </div>
                                <span className={`text-sm font-bold ${item.color || 'text-black'}`}>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 space-y-8">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg">
                              <TrendingUp className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold text-black tracking-tight">Impact</h4>
                          </div>
                          <div className="space-y-4">
                            {selectedProject.results.map((result, idx) => (
                              <div key={idx} className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-800 font-semibold">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </PageWrapper>
  );
}
