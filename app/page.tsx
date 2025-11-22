"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['C#', 'Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'C/C++'],
    frameworks: ['React', '.NET', 'Angular', 'Django', 'Next.js', 'Tailwind CSS', 'Flutter'],
    tools: ['Git', 'CI/CD', 'Robot Framework', 'Firebase', 'MySQL', 'MongoDB']
  };

  const experience = [
    {
      company: 'SOTI',
      role: 'Software Developer',
      period: 'July 2023 – Present',
      highlights: [
        'Developed full-stack features for enterprise mobility management using .NET, Angular, and React',
        'Built automated test scripts with Robot Framework, reducing deployment cycles by 30%',
        'Collaborated with Agile teams to deliver SaaS features for global deployments',
        'Refactored legacy modules improving system stability and maintainability'
      ]
    },
    {
      company: 'Freelance',
      role: 'Full Stack Developer',
      period: 'Jan 2019 – July 2023',
      highlights: [
        'Delivered 10+ web and mobile applications serving 500+ active users',
        'Built applications using React, Angular, Flutter, Firebase, and MySQL',
        'Created IoT-integrated solutions like My Voicing Glove showcased at state competitions',
        'Applied Agile practices, consistently delivering projects ahead of schedule'
      ]
    }
  ];

  const projects = [
    {
      name: 'PlayGround',
      description: 'Turf booking system with Flutter + Firebase backend and React admin dashboard. Features real-time bookings, user management, and automated notifications.',
      tech: ['Flutter', 'Firebase', 'React'],
      link: '#'
    },
    {
      name: 'Delishgo',
      description: 'Complete food delivery platform with customer UI, admin dashboards, and Firebase backend. Designed for local vendors with analytics and live order tracking.',
      tech: ['React', 'Firebase', 'Analytics'],
      link: '#'
    },
    {
      name: 'My Voicing Glove',
      description: 'IoT-based assistive device converting hand gestures to speech using ESP32, Firebase, and Flutter. Presented at state-level innovation events.',
      tech: ['IoT', 'ESP32', 'Flutter', 'Firebase'],
      link: '#'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            MM
          </button>
          <div className="flex gap-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 relative group ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.toLowerCase() ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block animate-fade-in-down">
            <p className="text-cyan-400 text-sm font-mono mb-4">Hi, my name is</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Mohammed Midlaj
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-6 animate-fade-in-up animation-delay-200">
            Full Stack Developer
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Building scalable web applications with modern technologies. 
            Specializing in React, Python, and .NET with a passion for clean code and user-centric design.
          </p>
          <div className="flex gap-6 justify-center mt-8 animate-fade-in-up animation-delay-600">
            <a href="https://github.com/mohammedmidlaj" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mohammedmidlaj" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mohammedmidlajm13@gmail.com"
               className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-all duration-300 animate-bounce-slow"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4 animate-slide-in-left">
            <Code className="text-cyan-400" size={32} />
            <span>About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-slate-300 leading-relaxed animate-slide-in-left animation-delay-200">
              <p className="hover:text-slate-100 transition-colors duration-300">
                I'm a Full Stack Developer with hands-on experience building scalable, high-performance web applications. 
                Currently working at <span className="text-cyan-400 font-semibold">SOTI</span>, I specialize in enterprise mobility management platforms.
              </p>
              <p className="hover:text-slate-100 transition-colors duration-300">
                My journey in tech started with freelancing, where I delivered 10+ applications serving 500+ active users. 
                I've worked across the full stack—from IoT devices to cloud platforms—always focusing on clean, maintainable code.
              </p>
              <p className="hover:text-slate-100 transition-colors duration-300">
                I hold a Master's in Computer Applications from Cochin University (CGPA: 9.2/10) and love building solutions 
                that make a real impact.
              </p>
            </div>
            <div className="space-y-8 animate-slide-in-right animation-delay-200">
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, idx) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in"
                      style={{animationDelay: `${idx * 50}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.frameworks, ...skills.tools].map((skill, idx) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in"
                      style={{animationDelay: `${idx * 50}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4 animate-slide-in-left">
            <Briefcase className="text-cyan-400" size={32} />
            <span>Experience</span>
          </h2>
          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 rounded-lg p-8 border border-slate-800 hover:border-cyan-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 animate-slide-in-up"
                style={{animationDelay: `${idx * 200}ms`}}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 transition-colors duration-300">{job.role}</h3>
                    <p className="text-xl text-slate-300">{job.company}</p>
                  </div>
                  <p className="text-slate-400 font-mono text-sm mt-2 md:mt-0">{job.period}</p>
                </div>
                <ul className="space-y-3 mt-6">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 flex gap-3 hover:text-slate-100 transition-colors duration-300 group">
                      <span className="text-cyan-400 mt-1 group-hover:scale-125 transition-transform duration-300">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4 animate-slide-in-left">
            <Code className="text-cyan-400" size={32} />
            <span>Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 hover:border-cyan-400/50 transition-all duration-500 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 animate-scale-in"
                style={{animationDelay: `${idx * 150}ms`}}
              >
                <div className="flex justify-between items-start mb-4">
                  <Code className="text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" size={28} />
                  <a href={project.link} className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-cyan-400 opacity-70 group-hover:opacity-100 transition-all duration-300 animate-fade-in"
                      style={{animationDelay: `${(idx * 150) + (techIdx * 50)}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-down">Get In Touch</h2>
          <p className="text-xl text-slate-400 leading-relaxed animate-fade-in-up animation-delay-200">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in-up animation-delay-400">
            <a 
              href="mailto:mohammedmidlajm13@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <a 
              href="tel:+917012836647"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Phone size={20} />
              +91 70128 36647
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>Built with Next.js & Tailwind CSS</p>
        <p className="mt-2">© 2025 Mohammed Midlaj</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow 8s ease-in-out 4s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;