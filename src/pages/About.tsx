import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Target, Rocket, Github, Linkedin, Mail, Eye, User } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 7, suffix: '+', label: 'Team Members' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const team = [
  {
    name: 'Hassan Raza',
    role: 'CEO',
    image: '/hassan.jpg',
    description: 'A visionary leader and expert mobile app developer, Hassan drives the company forward with strategic insights and cutting-edge app solutions.',
    social: { github: 'https://github.com/HASSANRAZA3700', linkedin: '#', email: 'info@zevenz.uk' }
  },
  {
    name: 'Faizan',
    role: 'CTO & Co-Founder',
    image: '/faizan1.png',
    description: 'Tech mastermind and co-founder, Faizan oversees all technical aspects of the company. He leads backend and frontend development using the powerful MERN stack.',
    social: { github: 'https://github.com/FAIZAN-Bor', linkedin: 'https://www.linkedin.com/in/m-faizan-503598264', email: 'info@zevenz.uk' }
  },
  {
    name: 'Saif',
    role: 'Founder & Lead Data Scientist',
    image: '/saif.jpg',
    description: 'With a unique blend of creativity and analytics, Saif brings visual storytelling to life while unlocking insights through AI & Data Solutions.',
    social: { github: 'https://github.com/saif55045', linkedin: 'https://www.linkedin.com/in/saif-ullah-5ba1b1140', email: 'info@zevenz.uk' }
  },
  {
    name: 'Ahtesham',
    role: 'Co-Founder / Graphic Designer & Video Editor',
    image: '/ahtasham.jpg',
    description: 'A creative powerhouse who turns ideas into visually stunning content, whether it\'s branding assets or polished video edits.',
    social: { github: 'https://github.com/Ahtesham-Shah999', linkedin: 'https://www.linkedin.com/in/ahtesham-shah-06741032b', email: 'info@zevenz.uk' }
  },
  {
    name: 'Ibrahim',
    role: 'Social Media Handler & Graphic Designer',
    image: '/ibrahim.png',
    description: 'Multimedia and creative design expert. Brings visual stories to life with stunning creativity.',
    social: { github: 'https://github.com/ibrahim-liaqat', linkedin: 'https://www.linkedin.com/in/ibrahim-liaqat-94b2022b1', email: 'info@zevenz.uk' }
  },
  {
    name: 'Farhan',
    role: 'MERN Stack Developer',
    image: '',
    description: 'Focused on scalable and robust web applications, Farhan adds strength to our development team with his full-stack expertise.',
    social: { github: '#', linkedin: 'https://www.linkedin.com/in/farhan-akhtar-4b7921291', email: 'info@zevenz.uk' }
  },
];

const timeline = [
  {
    year: '2022',
    title: 'Company Foundation',
    description: 'Zevenz was established with a focus on web development and a vision to democratize technology for businesses.',
  },
  {
    year: '2022',
    title: 'First Client',
    description: 'Secured our first enterprise client and successfully delivered a complex e-commerce platform, establishing our reputation for quality.',
  },
  {
    year: '2023',
    title: 'Service Expansion',
    description: 'Expanded our services to include mobile app development, data science, and AI/Data Solutions to meet growing client demands.',
  },
  {
    year: '2023',
    title: 'Innovation Lab',
    description: 'Launched our innovation lab focusing on AI, machine learning, and automated trading systems development.',
  },
  {
    year: '2024',
    title: '50+ Projects Milestone',
    description: 'Reached a significant milestone of 50+ successful projects and established partnerships with leading technology providers.',
  },
  {
    year: '2025',
    title: 'Continued Growth',
    description: 'Continuing to innovate and expand our capabilities while maintaining our commitment to excellence and client success.',
  },
];

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

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
          if (entry.target === missionRef.current) setMissionVisible(true);
          if (entry.target === storyRef.current) setStoryVisible(true);
          if (entry.target === teamRef.current) setTeamVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (statsRef.current) observer.observe(statsRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

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

          <div className="relative w-full px-6 lg:px-12 py-24 lg:py-32">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Providing Smart Technology Solutions</span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-semibold text-black mb-8 leading-[1.1] tracking-tight transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                About <span className="text-gray-400">Zevenz</span>
              </h1>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                Driven by innovation, guided by excellence. Discover the story behind Zevenz and the passionate team that makes digital transformation possible.
              </p>
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

        {/* Mission & Vision Section */}
        <section
          ref={missionRef}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {[
                {
                  title: 'Our Mission',
                  icon: Target,
                  color: 'blue',
                  content: 'To empower businesses through innovative technology solutions that drive growth, efficiency, and lasting impact in an ever-evolving digital landscape.',
                },
                {
                  title: 'Our Vision',
                  icon: Eye,
                  color: 'amber',
                  content: 'To be the global benchmark for excellence in digital transformation, recognized for our commitment to quality, innovation, and client success.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`group p-10 lg:p-14 rounded-[2.5rem] bg-white border border-gray-100 shadow-glass hover:shadow-glass-lg hover:border-gray-200 transition-all duration-700 card-lift ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 bg-gray-50 text-black shadow-sm">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-semibold text-black mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section
          ref={storyRef}
          className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white"
        >
          <div className="absolute inset-0">
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-black">Our Story</h2>
              </div>
              <p className={`text-lg text-gray-600 font-light transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                From humble beginnings to industry leaders - the journey of Zevenz
              </p>
            </div>

            <div className="max-w-4xl mx-auto" ref={containerRef}>
              <div className="relative">
                {/* Progress bar line */}
                <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gray-100 lg:-translate-x-1/2">
                  <motion.div
                    style={{ scaleY }}
                    className="absolute inset-0 bg-gradient-to-b from-black via-gray-400 to-gray-200 origin-top h-full"
                  />
                </div>

                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: isLeft ? -20 : 20, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                      className={`relative flex items-start gap-8 mb-20 last:mb-0`}
                    >
                      <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-lg lg:-translate-x-1/2 z-10 top-2 group">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
                        />
                      </div>

                      <div className={`ml-16 lg:ml-0 lg:w-[45%] ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-100 text-black text-xs font-bold rounded-full mb-4 tracking-widest uppercase shadow-sm">
                          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                          {item.year}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-gray-600 lg:text-lg leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={teamRef}
          className="relative py-24 lg:py-32 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className={`text-4xl lg:text-5xl font-semibold text-black mb-6 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Meet Our Team</h2>
              <p className={`text-lg text-gray-600 font-light transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>The talented professionals behind Zevenz&apos;s success</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-glass-sm hover:shadow-glass-lg hover:border-gray-200 transition-all duration-700 card-lift ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 w-full bg-gray-50/50 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700 scale-95 group-hover:scale-100 transform-gpu" />
                    ) : (
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-gray-300 group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-glass-sm">
                        <User className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="border-b-2 border-gray-100 mx-8 mt-2" />
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">{member.name}</h3>
                    <p className="text-sm font-semibold text-black mb-4 uppercase tracking-[0.15em]">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-light mb-8 line-clamp-3">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      {member.social.linkedin && member.social.linkedin !== '#' && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 hover:shadow-glass-sm transition-all duration-300">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && member.social.github !== '#' && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 hover:shadow-glass-sm transition-all duration-300">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 hover:shadow-glass-sm transition-all duration-300">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-4xl lg:text-5xl font-semibold text-white mb-6 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to Work with Our Team?
              </h2>
              <p className={`text-lg text-white/60 max-w-xl mx-auto mb-10 font-light transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Join the growing list of satisfied clients who have transformed their businesses with Zevenz Solutions.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
                <Link to="/contact" className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/portfolio" className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
