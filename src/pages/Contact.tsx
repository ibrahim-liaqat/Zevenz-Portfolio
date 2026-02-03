import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Our pricing is transparent with no hidden costs. Contact us for a custom quote based on your specific requirements.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to ensure your solution continues to run smoothly.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We can integrate seamlessly with your in-house team, providing additional expertise and capacity. We use modern collaboration tools and agile methodologies to ensure smooth communication and workflow.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in a wide range of technologies including React, Vue.js, Node.js, Python, React Native, Flutter, and various AI/ML frameworks. We choose the best technology stack based on your project requirements.',
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@zevenz.uk'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+92 326 7476834', '+92 309 6316223'],
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Faisalabad, Pakistan'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: Closed'],
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/zevenz.uk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/zevenz/?viewAsMember=true', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/FAIZAN-Bor', label: 'GitHub' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [heroVisible, setHeroVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const formRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
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
          if (entry.target === formRef.current) setFormVisible(true);
          if (entry.target === faqRef.current) setFaqVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (formRef.current) observer.observe(formRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xeoknwja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or contact us directly via email.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageWrapper>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-white pt-32 border-b border-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200/50 to-transparent blur-3xl animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-100/80 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12 py-24 lg:py-32">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Get in Touch</span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-semibold text-black mb-8 leading-[1.1] tracking-tight transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                Let's <span className="text-gray-400">Connect</span>
              </h1>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                Ready to transform your ideas into reality? Let's discuss your project and explore how Zevenz can help you achieve your technology goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={formRef}
          className="relative py-32 lg:py-48 overflow-hidden bg-gray-50/30"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div className={`transition-all duration-700 h-full ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="h-full p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col">
                  <h2 className="text-3xl font-semibold text-black mb-10 tracking-tight">Send Us a Message</h2>

                  {submitted ? (
                    <div className="text-center py-20 animate-fade-in-up">
                      <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-black" />
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-3">Message Sent!</h3>
                      <p className="text-gray-600 text-lg font-light">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 ml-1">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 ml-1">Service Interest <span className="text-red-500">*</span></label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="ai">AI & Data Solutions</option>
                          <option value="desktop">Desktop Applications</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 ml-1">Project Details <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            maxLength={1000}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:ring-4 focus:ring-black/5 transition-all outline-none resize-none"
                            placeholder="Tell us about your project..."
                          />
                          <span className="absolute bottom-4 right-4 text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                            {formData.message.length}/1000
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                  <div className="mt-8 text-center text-gray-400 font-light">
                    <p className="text-xs">
                      By submitting this form, you agree to our <a href="#" className="underline font-medium hover:text-black transition-colors">Privacy Policy</a> and <a href="#" className="underline font-medium hover:text-black transition-colors">Terms of Service</a>.
                    </p>
                  </div>
                </div>
              </div>


              {/* Contact Info Sidebar */}
              <div className={`transition-all duration-700 h-full flex flex-col gap-6 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                {/* 2x2 Grid of Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm group hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h3>
                      <div className="space-y-0.5">
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm font-bold text-black">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions Container */}
                <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 flex-grow flex flex-col">
                  <h3 className="text-sm font-bold text-black mb-6 tracking-tight">Quick Actions</h3>
                  <div className="space-y-6">
                    <a href="tel:+923011206519" className="group block">
                      <div className="flex items-center gap-4">
                        <div className="flex-grow">
                          <h4 className="text-sm font-bold text-black mb-0.5">Call Now</h4>
                          <p className="text-xs text-gray-500 font-light">Speak with our experts</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                      </div>
                    </a>
                    <div className="h-px bg-gray-100 w-full" />
                    <a href="mailto:info@zevenz.uk" className="group block">
                      <div className="flex items-center gap-4">
                        <div className="flex-grow">
                          <h4 className="text-sm font-bold text-black mb-0.5">Email Us</h4>
                          <p className="text-xs text-gray-500 font-light">Send us a direct email</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Follow Us Black Section */}
                <div className="p-8 rounded-[2rem] bg-black text-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold mb-6 tracking-tight">Follow Us</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 hover:rotate-12"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="relative py-32 lg:py-48 overflow-hidden bg-white border-y border-gray-100"
        >
          <div className="relative w-full px-6 lg:px-12">
            <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6 tracking-tight">FAQs</h2>
              <p className="text-lg text-gray-600 font-light">Common questions about working with Zevenz Solutions</p>
            </div>

            <div className={`max-w-3xl mx-auto space-y-4 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none group/faq"
                  >
                    <span className="text-lg font-medium text-black pr-8 tracking-tight group-hover/faq:text-gray-600 transition-colors">{faq.question}</span>
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-light text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          ref={ctaRef}
          className="relative py-32 lg:py-48 overflow-hidden bg-gray-50/30 border-t border-gray-100"
        >
          <div className="absolute inset-0 bg-black">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800/50 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className={`text-4xl lg:text-6xl font-semibold text-white mb-6 tracking-tight transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Ready to Get Started?</h2>
              <p className={`text-lg text-white/60 max-w-xl mx-auto mb-10 font-light transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                Our experts are ready to help you bring your vision to life. Let's start the conversation.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
                <a href="tel:+923267476834" className="magnetic-btn group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="mailto:info@zevenz.uk" className="magnetic-btn group inline-flex items-center gap-3 px-10 py-5 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
