import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, X, Check, Star, Play, ChevronLeft, ChevronRight, LayoutGrid, Calendar, User, TrendingUp, Quote } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';
import Tilt from '../components/ui/Tilt';

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || hasStarted) return;
    setHasStarted(true);
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(value * easeProgress);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [isVisible, value, hasStarted]);

  return <span className="tabular-nums">{count}{suffix}</span>;
}

const categories = ['All Projects', 'Web Development', 'Mobile Apps', 'AI & Data Solutions', 'Desktop Apps'];

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
    id: 'thekadar',
    title: 'Thekadar Management System',
    subtitle: 'Contractor Project & Labor Management Tool',
    category: 'Web Development',
    tags: ['Construction', 'Laravel', 'MySQL'],
    year: '2024',
    client: 'Builder Base Pvt Ltd',
    duration: '5 months',
    team: '3 developers',
    status: 'Completed & working',
    image: '/project-4.jpg',
    heroImage: '/project-4.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/O0vF6-EPRqQ',
      description: 'Watch how Thekadar streamlines project and workforce management for construction businesses'
    },
    description: 'A builder matchmaking platform where clients can easily find and connect with verified Thekedars (contractors) to build their homes. It simplifies project management and communication in the construction process.',
    problem: 'Clients often struggle to find trusted Thekedars and manage project discussions effectively. Communication gaps and lack of transparency can delay home-building projects.',
    solution: 'This platform bridges the gap between clients and Thekedars through real-time chat, secure login, and structured negotiation forms. It streamlines collaboration, improves trust, and speeds up decision-making.',
    features: [
      'Project & Site Management',
      'Daily Labor Attendance',
      'Material Inventory Tracking',
      'Expense & Budget Control',
      'Wage Calculation',
      'OTP-based user authentication'
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    results: [
      'Saved 20+ hours weekly in manual tracking',
      'Reduced budget overruns by 35%',
      'Increased team accountability',
      'Improved project timelines by 25%'
    ],
    testimonial: {
      text: "Thekadar helped our team stay organized and on track. It simplified wage calculations and made project tracking super easy.",
      author: "Imran Bashir",
      position: "Founder, Builder Base Pvt Ltd"
    }
  },
  {
    id: 'fitness',
    title: 'DevOverflow',
    subtitle: 'Comprehensive Developer Collaboration Platform',
    category: 'Web Development',
    tags: ['React', 'Git', 'Node.js'],
    year: '2025',
    client: 'Tech Startup',
    duration: '6 months',
    team: '5 developers',
    status: 'Live & Scaling',
    image: '/project-5.jpg',
    heroImage: '/project-5.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/GfW-Pi1COQE',
      description: 'See how DevOverflow empowers developers to collaborate, share code, and connect with hiring opportunities.'
    },
    description: 'A comprehensive development platform similar to GitHub, enabling developers to share code, collaborate on projects, manage version control, and explore networking and hiring opportunities.',
    problem: 'Developers needed an all-in-one platform to collaborate on code, manage projects with version control, and connect with other programmers while having access to hiring opportunities.',
    solution: 'We built a full-featured platform that combines code sharing, version control, project collaboration, developer networking, and a built-in job marketplace.',
    features: [
      'Code Sharing & Repositories',
      'Version Control Management',
      'Collaborative Workspaces',
      'Developer Networking & Profiles',
      'Job Board & Hiring Marketplace',
      'Pull Request Reviews'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Git Integration', 'Socket.io', 'Next.js'],
    results: [
      '10,000+ developers onboarded',
      '50,000+ repositories created',
      '500+ job placements facilitated',
      '95% user satisfaction rate'
    ],
    testimonial: {
      text: "DevOverflow has become our go-to platform for managing projects and finding talent. It's everything a modern development team needs in one place.",
      author: "Sarah Martinez",
      position: "CTO, TechVentures Inc."
    }
  },
  {
    id: 'analytics',
    title: 'Le Château AI Chatbot',
    subtitle: 'AI-Powered Restaurant Assistant',
    category: 'AI & Data Solutions',
    tags: ['AI & Data', 'RAG', 'Chatbot'],
    year: '2025',
    client: 'Le Château Restaurant',
    duration: '3 months',
    team: '2 AI Engineers',
    status: 'Live & Active',
    image: '/project-3.jpg',
    heroImage: '/project-3.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/crajkEpGJrw',
      description: 'See how our AI chatbot transforms the dining experience at Le Château Restaurant.'
    },
    description: 'An intelligent AI-powered chatbot designed to enhance the customer dining experience with seamless communication, instant bookings, and personalized recommendations.',
    problem: 'Restaurants face challenges managing high volumes of inquiries, table reservations, and customer requests, leading to staff overload and missed booking opportunities.',
    solution: 'We developed an AI chatbot that automates restaurant information delivery, handles real-time table reservations, and provides personalized recommendations.',
    features: [
      'Instant Restaurant Information',
      'Automated Table Reservations',
      'Real-time Booking System',
      'Personalized Guest Recommendations',
      'Menu Inquiries & Dietary Info',
      '24/7 Customer Support'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'React', 'Node.js', 'MongoDB'],
    results: [
      'Reduced staff workload by 60%',
      'Increased reservation bookings by 45%',
      'Achieved 95% customer satisfaction',
      'Average response time under 3s'
    ],
    testimonial: {
      text: "This AI chatbot has revolutionized how we interact with our guests. Reservations are seamless, and our staff can now focus on delivering exceptional service.",
      author: "Michel Dubois",
      position: "Manager, Le Château Restaurant"
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
    id: 'trainApp',
    title: 'Train Management System',
    subtitle: 'Desktop Application using C# and Oracle Database',
    category: 'Desktop Apps',
    tags: ['C#', 'Oracle DB', 'Desktop'],
    year: '2025',
    client: 'RailTech Systems',
    duration: '3 months',
    team: '2 developers',
    status: 'Completed',
    image: '/project-6.jpg',
    heroImage: '/project-6.jpg',
    description: 'A full-featured train management desktop application with secure Oracle DB integration. Supports three roles: Admin, Employee, and Passenger.',
    problem: 'Traditional train systems rely heavily on paper-based management or outdated legacy software, lacking role-based dashboards.',
    solution: 'This modern desktop application offers a centralized solution for managing trains, employees, bookings, and customer support using a clean C# WinForms UI.',
    features: [
      'Role-based Dashboards',
      'Train Management & Analytics',
      'Employee Task Assignment',
      'Passenger Booking & Tracking',
      'Oracle DB Integration',
      'Login, Signup, and Splash Screen'
    ],
    techStack: ['C# (.NET Framework)', 'WinForms', 'Oracle Database'],
    results: [
      'Improved efficiency by 45%',
      'Simplified booking tracking',
      'Integrated secure Oracle DB',
      'Deployed across 3 departments'
    ],
    testimonial: {
      text: "The Train Management System has made administrative and operational tasks seamless. It's a reliable and secure solution.",
      author: "Engr. Adeel Khan",
      position: "System Supervisor, RailTech Systems"
    }
  },
  {
    id: 'ngoApp',
    title: 'NGO Donation Platform',
    subtitle: 'Mobile Platform for Sadka & Zakat Donations',
    category: 'Mobile Apps',
    tags: ['React Native', 'Firebase', 'Mobile'],
    year: '2025',
    client: 'Community Foundation NGO',
    duration: '4 months',
    team: '3 developers',
    status: 'Live & Active',
    image: '/project-7.jpg',
    heroImage: '/project-7.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/_QcK0zQ9imA',
      description: 'See how this app empowers communities through technology and makes charity more accessible.'
    },
    description: 'A mobile application dedicated to helping people through donations such as Sadka and Zakat, connecting donors with those in need.',
    problem: 'Traditional charity systems lack transparency and accessibility, making it difficult for donors to connect directly with those in need.',
    solution: 'We built a user-friendly mobile platform that leverages technology to make charity more transparent and impactful.',
    features: [
      'Donor-Beneficiary Connection',
      'Education Support Programs',
      'Financial Aid Management',
      'Housing Assistance',
      'Transparent Donation Tracking',
      'Secure Payment Integration'
    ],
    techStack: ['React Native CLI', 'Firebase', 'React Navigation', 'Reanimated'],
    results: [
      'Connected 1000+ donors',
      'Raised $50,000+ in 3 months',
      'Supported 200+ families',
      '95% satisfaction rating'
    ],
    testimonial: {
      text: "Alhamdulillah, this app has made giving so much easier and more meaningful. We can see the direct impact of our donations.",
      author: "Fatima Ahmed",
      position: "Founder, Community Foundation NGO"
    }
  },
  {
    id: 'zakatApp',
    title: 'Zakat Calculator App',
    subtitle: 'Comprehensive Zakat Calculation & Distribution Tool',
    category: 'Mobile Apps',
    tags: ['React Native', 'Mobile', 'Finance'],
    year: '2024',
    client: 'Islamic Relief Fund',
    duration: '3 months',
    team: '2 developers',
    status: 'Live',
    image: '/project-7.jpg',
    heroImage: '/project-7.jpg',
    demoVideo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/_QcK0zQ9imA',
      description: 'See how easily you can calculate your Zakat with our intuitive mobile app.'
    },
    description: 'A mobile application designed to simplify the calculation of Zakat for various assets including gold, silver, cash, and business inventory, ensuring accurate and compliant distribution.',
    problem: 'Many Muslims find it challenging to accurately calculate Zakat due to complex rules regarding different types of assets and fluctuating Nisab values.',
    solution: 'We developed a clean, easy-to-use mobile app with real-time gold/silver prices and automatic Nisab calculation to ensure 100% accuracy.',
    features: [
      'Real-time Gold/Silver Rates',
      'Auto Nisab Calculation',
      'Multiple Asset Categories',
      'Zakat History Tracking',
      'Reminders & Notifications'
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL'],
    results: [
      '5,000+ downloads in first month',
      'Rated 4.8/5 on App Store',
      'Helped distribute $1M+ in Zakat'
    ],
    testimonial: {
      text: "Finally, an app that takes the confusion out of Zakat calculation. It's precise, up-to-date, and incredibly user-friendly.",
      author: "Ahmed Bilal",
      position: "User"
    }
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero section loads immediately
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === filterRef.current) setFilterVisible(true);
          if (entry.target === projectsRef.current) setProjectsVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (statsRef.current) observer.observe(statsRef.current);
    if (filterRef.current) observer.observe(filterRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <PageWrapper>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12 py-20">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Showcasing Excellence</span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-semibold text-black mb-6 leading-tight tracking-tight transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                Our Portfolio
              </h1>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                Discover how we've helped businesses transform their ideas into successful digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            {/* Filter Buttons */}
            <div
              ref={filterRef}
              className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 ${filterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden group ${activeCategory === category
                    ? 'text-white bg-black'
                    : 'text-gray-700 bg-white border border-gray-200 hover:border-black'
                    }`}
                >
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div
              ref={projectsRef}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer transition-all duration-700 ease-out ${projectsVisible ? 'opacity-100 [transform:perspective(1000px)_rotateY(0deg)_scale(1)]' : 'opacity-0 [transform:perspective(1000px)_rotateY(90deg)_scale(0.8)]'}`}
                  style={{ transitionDelay: `${index * 500}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Tilt className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-glass transition-all duration-500 hover:shadow-2xl hover:border-gray-200">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full shadow-lg">
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                        <span className="text-xs font-bold text-black">{project.year}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50 rounded-full border border-gray-100">
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
                  </Tilt>
                </div>
              ))}
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
              {[
                { value: 100, suffix: '+', label: 'Projects Completed' },
                { value: 50, suffix: '+', label: 'Happy Clients' },
                { value: 7, suffix: '+', label: 'Team Members' },
                { value: 99, suffix: '%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter transition-all duration-700 ${statsVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} style={{ transitionDelay: `${400 + index * 150}ms` }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                  </div>
                  <p className={`text-sm lg:text-base text-white/60 font-medium uppercase tracking-widest transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${800 + index * 150}ms` }}>{stat.label}</p>
                </div>
              ))}
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
              <h2 className={`text-4xl lg:text-6xl font-semibold text-white mb-6 tracking-tight transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Ready to Join Our Success Stories?</h2>
              <p className={`text-lg text-white/60 max-w-xl mx-auto mb-10 font-light transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Let's create something amazing together. Start your project with Zevenz and become our next success story.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
                <Link to="/contact" className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-glow">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  View Services
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

                        <div className="p-10 rounded-[2rem] bg-black text-white relative overflow-hidden group shadow-2xl">
                          <Quote className="absolute -top-6 -right-6 w-32 h-32 text-white/10 rotate-12 transition-transform group-hover:scale-110" />
                          <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xl italic font-light leading-relaxed mb-10 opacity-90 relative z-10">
                            "{selectedProject.testimonial.text}"
                          </p>
                          <div className="flex items-center gap-5 relative z-10">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center font-bold text-2xl border border-white/20">
                              {selectedProject.testimonial.author[0]}
                            </div>
                            <div>
                              <p className="font-bold text-lg">{selectedProject.testimonial.author}</p>
                              <p className="text-sm opacity-50 uppercase tracking-widest">{selectedProject.testimonial.position}</p>
                            </div>
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
      </div >
    </PageWrapper >
  );
}
