import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from '../components/ui/Tilt';

const projects = [
  {
    title: 'Smart BizTrack',
    tags: ['E-commerce', 'React', 'Node.js'],
    description: 'Complete general grocery management solution with modern UI and analytics.',
    image: '/project-1.jpg',
  },
  {
    title: 'Decentralized Crypto Wallet',
    tags: ['Blockchain', 'Rust'],
    description: 'A fully functional decentralized cryptocurrency wallet with custom blockchain and Zakat system.',
    image: '/project-2.jpg',
  },
  {
    title: 'Restaurant Chatbot Support',
    tags: ['AI & Data', 'RAG Chatbot'],
    description: 'AI-powered customer support RAG chatbot for answering menu, reservation, and timing queries.',
    image: '/project-3.jpg',
  },
];

export default function Portfolio() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <h2
              className={`text-4xl lg:text-5xl font-semibold text-black mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-lg text-gray-600 max-w-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              Take a look at some of our recent successful projects
            </p>
          </div>

          <Link
            to="/portfolio"
            className={`inline-flex items-center gap-2 text-sm font-medium text-black group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="animated-underline">View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={project.title}
              className={`group relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-glass transition-all duration-700 ease-out hover:shadow-2xl hover:border-gray-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 500}ms` }}
            >
              <div className="relative h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full shadow-lg">
                      <ArrowRight className="w-4 h-4" />
                      View Project
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
