'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronDown, Calendar, MapPin, Award, Code, Brain, Database, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBlogPost, setShowBlogPost] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle cursor effects
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scrolling navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education','recommendations', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Redmond, WA",
      period: "Jul 2023 – Present",
      achievements: [
        "AI Integration: Integrated Generative AI into Microsoft&apos;s content platform, boosting efficiency by 99% across 2B+ support pages",
        "Frontend Architecture: Modernized frontend with React, Redux, and Fluent UI, migrating legacy systems while ensuring accessibility and performance standards",
        "Schema-Driven Development: Built form-based UI with JSONForms, reducing authoring time by 70% and error rates by 90%",
        "High-Scale Backend Systems: Engineered secure APIs using C#, .NET, Azure Functions, and CosmosDB—serving 15B+ monthly requests with 99.997% uptime",
        "Real-Time Data Pipelines: Led development of metadata pipelines providing system insights for 30+ partner teams, enabling 100% content freshness visibility",
        "DevOps &amp; Infrastructure: Designed secure local development infrastructure with isolated Azure subscriptions and token-based authentication"
      ]
    },
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      location: "Redmond, WA",
      period: "May – Aug 2022",
      achievements: [
        "Built TypeScript + React web app using Microsoft&apos;s M365 extensibility SDK, enabling code portability across Teams hosts with 1M+ monthly active users",
        "Created cross-host functionality with shared logic for SSO authentication, calling, and messaging features",
        "Published open-source sample application using official Microsoft Teams JS SDK on GitHub"
      ]
    },
    {
      company: "Machine Learning Research",
      role: "Research Assistant — Dr. Jean-Baptiste Tristan",
      location: "Boston, MA",
      period: "May 2021 – May 2022",
      achievements: [
        "Developed ML models predicting compound solubility from cheminformatics datasets (10,000+ molecules) with R² greater than 0.95 accuracy",
        "Implemented feature selection using Lasso regression to identify impactful chemical descriptors and reduce model complexity",
        "Designed modular ML pipeline with cross-validation, hyperparameter tuning, and comprehensive performance metrics",
        "Collaborated with research team to integrate predictive models into computational chemistry workflows"
      ]
    }
  ];

  const projects = [
    {
      title: "PlantPal - AI Plant Care Assistant",
      description: "A React web application that combines computer vision and NLP to help users identify plants and receive personalized care guidance. The app features dual AI integration with offline fallback capabilities.",
      details: [
        "Smart Plant Identification: Integrated OpenAI Vision API and PlantNet API with fallback logic, achieving 90%+ accuracy in plant identification",
        "AI-Powered Chat Assistant: Implemented conversational AI using OpenAI&apos;s GPT-4 for personalized plant care advice and problem diagnosis",
        "Robust Architecture: Built comprehensive offline mode with local plant database, ensuring 100% functionality even when AI services are unavailable",
        "User Experience: Designed intuitive interface with real-time image analysis, confidence scoring, and detailed care instructions",
        "Performance Optimization: Implemented retry logic, error handling, and graceful degradation for enterprise-level reliability"
      ],
      tech: ["React", "OpenAI API", "Computer Vision", "TypeScript", "Node.js"]
    },
    {
      title: "Hartree-Fock Solver",
      description: "Python implementation for electronic energy approximation and molecular orbital visualization in quantum chemistry applications.",
      details: [
        "Implemented Self-Consistent Field (SCF) algorithm for solving the many-electron Schrödinger equation",
        "Built efficient integral evaluation and matrix manipulation routines for molecular systems",
        "Achieved numerical stability through symmetric orthogonalization and convergence acceleration",
        "Designed modular architecture for different basis sets and molecular configurations"
      ],
      tech: ["Python", "NumPy", "Quantum Chemistry", "Scientific Computing"]
    },
    {
      title: "Computer Vision: Biomedical Application",
      description: "Developed CNN and RNN models for breast cancer tissue analysis, enabling automated identification of tumor characteristics in TNBC research.",
      details: [
        "Implemented U-Net and FCN architectures for nuclei segmentation in histopathological images",
        "Achieved greater than 90% accuracy in identifying cancer nuclei morphology and characteristics",
        "Built comprehensive data augmentation pipeline for medical imaging robustness",
        "Designed custom loss functions combining Dice loss and boundary loss for precise segmentation"
      ],
      tech: ["PyTorch", "Computer Vision", "Medical Imaging", "Deep Learning"]
    },
    {
      title: "H₂ Potential Energy Surface",
      description: "Built Kernel Ridge Regression model with Gaussian Processes to predict molecular potential energy surfaces, using PyTorch for automatic differentiation.",
      details: [
        "Implemented Kernel Ridge Regression with custom kernel functions for molecular property prediction",
        "Utilized Gaussian Processes for uncertainty quantification in energy surface mapping",
        "Leveraged PyTorch&apos;s automatic differentiation for gradient-based optimization",
        "Achieved high accuracy in predicting molecular configurations and energy landscapes"
      ],
      tech: ["Python", "PyTorch", "Machine Learning", "Gaussian Processes", "Quantum Chemistry"]
    },
    {
      title: "TA Application System",
      description: "Django web application for Boston College streamlining Teaching Assistant applications with secure authentication and administrative workflows.",
      details: [
        "Built full-stack web application using Django framework with PostgreSQL database",
        "Implemented secure user authentication and role-based access control",
        "Designed administrative dashboard for faculty to review and manage TA applications",
        "Created responsive frontend with dynamic forms and real-time application status updates"
      ],
      tech: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"]
    }
  ];

  const skillCategories = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Redux", "Fluent UI", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Backend & Cloud",
      skills: [".NET", "C#", "Node.js", "Azure Functions", "CosmosDB", "REST APIs", "Azure Infrastructure"]
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI & Machine Learning",
      skills: ["OpenAI API", "Computer Vision", "NLP", "Python", "PyTorch", "Scikit-learn", "Data Analysis"]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Tools & Databases",
      skills: ["Git", "SQL", "Django", "Azure DevOps", "JSON Schema", "RESTful Services"]
    }
  ];

  const blogPosts = [
    {
      id: "hartree-fock",
      title: "Building a Hartree-Fock Solver: From Quantum Theory to Python Code",
      date: "December 2024",
      excerpt: "A deep dive into implementing a fundamental algorithmn in quantum chemistry and its real-world applications in molecular modeling.",
      tags: ["Quantum Chemistry", "Python", "Scientific Computing"]
    },
    {
      id: "tnbc-segmentation",
      title: "Deep Learning for Nuclei Segmentation: A Computer Vision Approach",
      date: "March 2025",
      excerpt: "Exploring CNN and RNN architectures for automated tumor characteristic identification in Triple Negative Breast Cancer research.",
      tags: ["Computer Vision", "Deep Learning", "Medical Imaging"]
    }
  ];

  const BlogPost = ({ postId, onClose }: { postId: string; onClose: () => void }) => {
    const blogContent: Record<string, { title: string; content: React.ReactElement }> = {
      "hartree-fock": {
        title: "Building a Hartree-Fock Solver: From Quantum Theory to Python Code",
        content: (
          <div className="prose prose-lg max-w-none text-gray-300">
            <h2 className="text-2xl font-bold text-white mb-4">What is Hartree-Fock Theory?</h2>
            <p className="mb-6">The Hartree-Fock (HF) method is the cornerstone of modern quantum chemistry, providing a mean-field approximation to solve the many-electron Schrödinger equation. While the exact solution is computationally intractable for systems with more than a few electrons, HF gives us a practical starting point for understanding molecular electronic structure.</p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Why Build Your Own Solver?</h2>
            <p className="mb-6">During my research with Dr. Jean-Baptiste Tristan, I implemented a custom Hartree-Fock solver to gain deep insight into the underlying mathematics and computational challenges. This project bridges the gap between theoretical quantum mechanics and practical software engineering.</p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Key Technical Challenges</h2>
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Numerical Stability</h3>
              <p className="text-sm text-gray-300">The orthogonalization step using S^(-1/2) requires careful handling of near-linear dependencies in the basis set. I used symmetric orthogonalization to maintain numerical stability.</p>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Practical Applications</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li><strong>Drug Discovery:</strong> Understanding drug-target interactions through molecular orbitals</li>
              <li><strong>Materials Science:</strong> Foundation for designing new materials with specific electronic properties</li>
              <li><strong>Catalysis Research:</strong> Studying reaction mechanisms and bond formation/breaking</li>
              <li><strong>Environmental Chemistry:</strong> Predicting pollutant behavior in atmospheric systems</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-4">Performance Insights</h2>
            <p className="mb-4">My implementation demonstrates the computational scaling challenges inherent in quantum chemistry:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>O(N⁴) scaling:</strong> Two-electron integral evaluation dominates computational cost</li>
              <li><strong>Memory requirements:</strong> Storing electron repulsion integrals scales as O(N⁴)</li>
              <li><strong>Convergence behavior:</strong> Larger molecules require sophisticated acceleration</li>
            </ul>
          </div>
        )
      },
      "tnbc-segmentation": {
        title: "Deep Learning for Nuclei Segmentation",
        content: (
          <div className="prose prose-lg max-w-none text-gray-300">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge of Breast Cancer Diagnosis</h2>
            <p className="mb-6">Breast cancer remains one of the leading causes of cancer-related deaths among women worldwide. Triple Negative Breast Cancer (TNBC) is particularly aggressive, accounting for 15-20% of all breast cancers and lacking targeted therapy options.</p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Why Computer Vision for Medical Imaging?</h2>
            <p className="mb-4">Traditional histopathological analysis faces several limitations that computer vision can address:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li><strong>Subjectivity:</strong> Manual annotation varies between pathologists</li>
              <li><strong>Scale:</strong> A single slide can contain thousands of cells requiring analysis</li>
              <li><strong>Precision:</strong> Cancer nuclei exhibit heterogeneous characteristics</li>
              <li><strong>Efficiency:</strong> Manual analysis can take hours per slide</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">Deep Learning Architectures</h3>
              <p className="text-sm text-gray-300 mb-3">I implemented and compared multiple state-of-the-art segmentation architectures:</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li><strong>U-Net:</strong> Excellent for biomedical segmentation with skip connections</li>
                <li><strong>FCN-ResNet:</strong> Strong backbone features for nuclei boundaries</li>
                <li><strong>SegNet:</strong> Memory-efficient encoder-decoder architecture</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Clinical Impact and Applications</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li><strong>Automated Pathology Workflow:</strong> Morphometric analysis and mitotic counting</li>
              <li><strong>Precision Medicine:</strong> Prognostic markers and drug resistance identification</li>
              <li><strong>Treatment Response:</strong> Monitoring cellular changes during therapy</li>
              <li><strong>Biomarker Discovery:</strong> Finding morphological patterns for treatment response</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-4">Results and Performance</h2>
            <p className="mb-4">Based on my experiments with standard biomedical segmentation metrics:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>U-Net with ResNet Encoder:</strong> Achieved best overall performance with AJI greater than 0.50</li>
              <li><strong>Data Augmentation Impact:</strong> Improved generalization by 15-20% across all metrics</li>
              <li><strong>Multi-scale Training:</strong> Enhanced detection of both small and large nuclei</li>
            </ul>
          </div>
        )
      }
    };

    const post = blogContent[postId];
    if (!post) return null;

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto overscroll-behavior-contain">
        <div className="min-h-screen py-8 px-4">
          <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <h1 className="text-3xl font-bold text-white pr-8">{post.title}</h1>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-xl transition-colors flex-shrink-0"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>
              {post.content}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  ← Back to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 pointer-events-none" />
      
      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none opacity-20 rounded-full blur-3xl transition-all duration-300 ease-out z-0"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-xl font-bold text-emerald-400">
              AB
            </div>
            
            {/* Desktop Navigation */}
           <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'recommendations', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-emerald-400 relative group ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-400'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-px bg-emerald-400 transform transition-transform origin-left ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-6 py-4 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'education','recommendations', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize hover:text-emerald-400 hover:bg-slate-800/50 rounded-xl transition-all duration-300 text-gray-400"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6  pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          <h1 className="text-6xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="text-white">Ananya</span>
            <br />
            <span className="text-gray-400">Barthakur</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-24" />
            <p className="text-xl text-emerald-400 font-medium tracking-wider uppercase">
              Software Engineer
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-24" />
          </div>
          
          <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Full-Stack Engineer specializing in frontend architecture, distributed systems, and AI integration. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button
              onClick={() => scrollToSection('experience')}
              className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border border-slate-700 hover:border-emerald-400 text-gray-300 hover:text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-800/20 hover:bg-slate-800/40"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <Mail className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: "mailto:ananyabarthakur1@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ananya-barthakur1/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/ananyabarthakur", label: "GitHub" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a 
                key={index}
                href={href} 
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel="noopener noreferrer" 
                className="group p-3 bg-slate-800/30 hover:bg-slate-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-slate-600"
                aria-label={label}
              >
                <Icon size={20} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              About
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="bg-slate-900/30 backdrop-blur-xl rounded-3xl p-12 border border-slate-800/50">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I'm a full-stack software engineer with 2+ years of experience at Microsoft, where I specialize in building scalable web applications and integrating AI technologies. My passion lies in creating elegant solutions that bridge complex technical systems with intuitive user experiences. From high-performance backend architectures serving billions of requests to modern frontend interfaces powered by cutting-edge AI, I focus on building software that makes a meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-900/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Experience
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:bg-slate-900/60">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{exp.company}</h3>
                    <p className="text-xl text-white font-medium">{exp.role}</p>
                  </div>
                  <div className="text-right text-gray-400 space-y-1">
                    <div className="flex items-center lg:justify-end gap-2 text-sm">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center lg:justify-end gap-2 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex} className="text-gray-300 flex items-start text-sm leading-relaxed">
                      <span className="text-emerald-400 mr-4 mt-1 text-xs">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Projects
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:bg-slate-900/60">
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-300 flex items-start text-sm leading-relaxed">
                        <span className="text-emerald-400 mr-4 mt-1 text-xs">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-800/60 text-gray-300 rounded-lg text-xs border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-900/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Technical Skills
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="group bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:bg-slate-900/60">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-xl mr-4 border border-emerald-500/20">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-400 bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-700/30">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Education
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-10 border border-slate-800/50">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Boston College</h3>
            <p className="text-xl text-white mb-2">B.Sc. in Computer Science & Philosophy</p>
            <p className="text-gray-400 mb-6">Graduated 2023</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="px-4 py-2 bg-slate-800/60 text-gray-300 rounded-xl border border-slate-700/50 text-sm">
                🏌️ NCAA Division I Golfer
              </span>
              <span className="px-4 py-2 bg-slate-800/60 text-gray-300 rounded-xl border border-slate-700/50 text-sm">
                📊 SAT 1540
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-32 px-6 bg-slate-900/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Recommendations
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Denise Architetto",
                role: "Principal Engineering Group Manager (Director M365)",
                company: "Microsoft",
                text: "Ananya is an incredibly bright and driven software engineer with immense potential. From the moment she joined the team, she impressed everyone with how quickly she picked up new technologies and ramped up on a complex domain. Her ability to learn fast, adapt to new challenges, and seek out feedback makes her a standout engineer. Ananya has shown strong capability across both front-end and back-end engineering, demonstrating versatility and a willingness to take on whatever the team needed. She consistently approached her work with thoughtfulness and curiosity—asking insightful questions when working with product managers to ensure a deep understanding of requirements and a clear path to execution. Beyond her technical skills, Ananya is a culture leader. She actively planned team outings and played a key role in building a positive, inclusive, and connected team environment. Her energy, initiative, and focus on team morale made a lasting impact. Ananya is self-motivated, career-focused, and a natural collaborator. I&apos;m excited to see where her career takes her and highly recommend her to any team looking for a talented, adaptable, and inspiring engineer.",
                date: "2025"
              },
              {
                name: "Hepcibha Addakula",
                role: "Principal Engineering Manager", 
                company: "Microsoft",
                text: "Working with Ananya has been an absolute pleasure. A fresh breath of energy on the team, she brings curiosity, focus, and unwavering commitment to everything she does. From quickly ramping up on complex projects to leading inclusive team events as part of the morale committee, Ananya consistently delivers with impact. She even mentored an intern gracefully while staying on top of her own commitments. Ananya shows strong ownership across initiatives and is always eager to learn from others, embracing diverse perspectives with respect. Even under challenging conditions, she meets deadlines with urgency and grace. A fantastic teammate and a rising star!",
                date: "2025"
              },
              {
                name: "Jayalakshmi Karanam",
                role: "Principal Software Engineer",
                company: "Microsoft", 
                text: "Collaborating with Ananya has been a truly rewarding experience. She is curious and determined. Her insightful questions regularly uncover blind spots, highlight opportunities for improvement, and bring fresh perspectives that challenge established ways of thinking in a productive and thoughtful manner. Ananya swiftly mastered Azure Data Factory and seamlessly took over my responsibilities in my absence, demonstrating exceptional ownership and adaptability. Her technical proficiency, willingness to learn, and strong problem-solving skills make her a dependable and highly effective team member. Without hesitation, I wholeheartedly recommend Ananya for a software engineer position. She would be an invaluable asset to any organization.",
                date: "2025"
              }
            ].map((rec, index) => (
              <div key={index} className="group bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:bg-slate-900/60">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-emerald-400">{rec.name}</h3>
                    <span className="text-xs text-gray-500 bg-slate-800/60 px-2 py-1 rounded border border-slate-700/50">{rec.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{rec.role}</p>
                  <p className="text-sm text-emerald-400/80 font-medium">{rec.company}</p>
                </div>
                
                <blockquote className="text-gray-300 italic  leading-relaxed text-sm">
                  "{rec.text}"
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/ananya-barthakur1/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={18} className="mr-3" />
              View All Recommendations
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Blog
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 hover:border-slate-700 transition-all duration-500 hover:bg-slate-900/60 cursor-pointer"
                   onClick={() => setShowBlogPost(post.id)}>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-slate-800/60 text-gray-400 rounded-lg text-xs border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors text-sm">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Contact
            </h2>
            <div className="w-20 h-px bg-emerald-400 mx-auto" />
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-800/50 mb-12">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's collaborate on something amazing
            </p>
            
            <div className="text-lg text-gray-300 mb-10 flex items-center justify-center gap-3">
              <Mail className="text-emerald-400" size={20} />
              <span>ananyabarthakur1@gmail.com</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:ananyabarthakur1@gmail.com"
                className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Mail size={18} className="mr-3" />
                Send Email
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ananya-barthakur1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border border-slate-700 hover:border-emerald-400 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-800/20 hover:bg-slate-800/40 flex items-center justify-center"
              >
                <Linkedin size={18} className="mr-3" />
                Connect
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.linkedin.com/in/ananya-barthakur1/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Award size={16} />
              Professional Recommendations
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800 bg-slate-900/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Ananya Barthakur
          </p>
        </div>
      </footer>

      {/* Blog Post Modal */}
      {showBlogPost && (
        <BlogPost postId={showBlogPost} onClose={() => setShowBlogPost(null)} />
      )}
    </div>
  );
}