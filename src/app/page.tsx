'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Calendar, MapPin, Briefcase, Award, Code, Brain, Database, Users } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBlogPost, setShowBlogPost] = useState(null);

  // Smooth scrolling navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'recommendations', 'blog', 'contact'];
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
        "AI Integration: Integrated Generative AI into Microsoft's internal authoring platform, boosting content creation efficiency by 99% across 2B+ support pages",
        "Frontend Architecture: Modernized frontend with React, Redux, and Fluent UI, migrating legacy systems while ensuring accessibility and performance standards",
        "Schema-Driven Development: Built form-based UI with JSONForms, reducing authoring time by 70% and error rates by 90%",
        "High-Scale Backend Systems: Engineered secure APIs using C#, .NET, Azure Functions, and CosmosDB—serving 15B+ monthly requests with 99.997% uptime",
        "Real-Time Data Pipelines: Led development of metadata pipelines providing system insights for 30+ partner teams, enabling 100% content freshness visibility",
        "DevOps & Infrastructure: Designed secure local development infrastructure with isolated Azure subscriptions and token-based authentication"
      ]
    },
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      location: "Redmond, WA",
      period: "May – Aug 2022",
      achievements: [
        "Built TypeScript + React web app using Microsoft's M365 extensibility SDK, enabling code portability across Teams hosts with 1M+ monthly active users",
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
        "Developed ML models predicting compound solubility from cheminformatics datasets (10,000+ molecules) with R² > 0.95 accuracy",
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
        "AI-Powered Chat Assistant: Implemented conversational AI using OpenAI's GPT-4 for personalized plant care advice and problem diagnosis",
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
        "Achieved >90% accuracy in identifying cancer nuclei morphology and characteristics",
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
        "Leveraged PyTorch's automatic differentiation for gradient-based optimization",
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
        "Created responsive frontend with dynamic forms and real-time application status updates",
        "Deployed application with proper security measures and data validation"
      ],
      tech: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"]
    }
  ];

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Redux", "Fluent UI", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Cloud",
      skills: [".NET", "C#", "Node.js", "Azure Functions", "CosmosDB", "REST APIs", "Azure Infrastructure"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      skills: ["OpenAI API", "Computer Vision", "NLP", "Python", "PyTorch", "Scikit-learn", "Data Analysis"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tools & Databases",
      skills: ["Git", "SQL", "Django", "Azure DevOps", "Docker", "JSON Schema", "RESTful Services"]
    }
  ];

  const blogPosts = [
    {
      id: "hartree-fock",
      title: "Building a Hartree-Fock Solver: From Quantum Theory to Python Code",
      date: "December 2024",
      excerpt: "A deep dive into implementing quantum chemistry's fundamental algorithm and its real-world applications in molecular modeling.",
      tags: ["Quantum Chemistry", "Python", "Scientific Computing"]
    },
    {
      id: "tnbc-segmentation",
      title: "Deep Learning for Breast Cancer Nuclei Segmentation: A Computer Vision Approach",
      date: "March 2025",
      excerpt: "Exploring CNN and RNN architectures for automated tumor characteristic identification in Triple Negative Breast Cancer research.",
      tags: ["Computer Vision", "Deep Learning", "Medical Imaging"]
    }
  ];

  const BlogPost = ({ postId, onClose }) => {
    const blogContent = {
      "hartree-fock": {
        title: "Building a Hartree-Fock Solver: From Quantum Theory to Python Code",
        content: (
          <div className="prose prose-lg max-w-none text-gray-300">
            <h2 className="text-2xl font-bold text-white mb-4">What is Hartree-Fock Theory?</h2>
            <p className="mb-6">The Hartree-Fock (HF) method is the cornerstone of modern quantum chemistry, providing a mean-field approximation to solve the many-electron Schrödinger equation. While the exact solution is computationally intractable for systems with more than a few electrons, HF gives us a practical starting point for understanding molecular electronic structure.</p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Why Build Your Own Solver?</h2>
            <p className="mb-6">During my research with Dr. Jean-Baptiste Tristan, I implemented a custom Hartree-Fock solver to gain deep insight into the underlying mathematics and computational challenges. This project bridges the gap between theoretical quantum mechanics and practical software engineering.</p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Key Technical Challenges</h2>
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Numerical Stability</h3>
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
        title: "Deep Learning for Breast Cancer Nuclei Segmentation",
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
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Deep Learning Architectures</h3>
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
              <li><strong>U-Net with ResNet Encoder:</strong> Achieved best overall performance with AJI > 0.50</li>
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
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="min-h-screen py-8 px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl border border-purple-500/20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>
              {post.content}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ananya Barthakur
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
              <img 
                src="/profile.jpeg" 
                alt="Ananya Barthakur" 
                className="w-full h-full rounded-full object-cover bg-slate-800"
                onError={(e) => {
                  // Fallback to initials if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-4xl font-bold">AB</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Developer with 2+ years at Microsoft, specializing in scalable web applications and AI integration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:ananyabarthakur1@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ananya-barthakur1/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ananyabarthakur" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi! I'm Ananya, a full-stack software engineer with 2+ years of experience at Microsoft, specializing in scalable web applications and AI integration. I have a passion for creating solutions that bridge the gap between complex technology and intuitive user experiences. My expertise spans from developing high-performance backend systems serving billions of requests to crafting engaging frontend interfaces and integrating cutting-edge AI capabilities.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.company}</h3>
                    <p className="text-xl font-semibold text-white">{exp.role}</p>
                  </div>
                  <div className="text-right text-gray-300 mt-2 md:mt-0">
                    <div className="flex items-center justify-end mb-1">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center justify-end">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
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
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-purple-400 mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-3 mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-sm text-gray-300 bg-slate-800/50 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
<section id="recommendations" className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Recommendations
      </span>
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {[
        {
          name: "Denise Architetto",
          role: "Principal Engineering Group Manager (Director M365)",
          company: "Microsoft",
          text: "Ananya is an incredibly bright and driven software engineer with immense potential. From the moment she joined the team, she impressed everyone with how quickly she picked up new technologies and ramped up on a complex domain. Her ability to learn fast, adapt to new challenges, and seek out feedback makes her a standout engineer. Ananya has shown strong capability across both front-end and back-end engineering, demonstrating versatility and a willingness to take on whatever the team needed. She consistently approached her work with thoughtfulness and curiosity—asking insightful questions when working with product managers to ensure a deep understanding of requirements and a clear path to execution. Beyond her technical skills, Ananya is a culture leader. She actively planned team outings and played a key role in building a positive, inclusive, and connected team environment. Her energy, initiative, and focus on team morale made a lasting impact. Ananya is self-motivated, career-focused, and a natural collaborator. I’m excited to see where her career takes her and highly recommend her to any team looking for a talented, adaptable, and inspiring engineer.",
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
          role: "Principal Software Engineer ",
          company: "Microsoft", 
          text: "Collaborating with Ananya has been a truly rewarding experience. She is curious and determined. Her insightful questions regularly uncover blind spots, highlight opportunities for improvement, and bring fresh perspectives that challenge established ways of thinking in a productive and thoughtful manner. Ananya swiftly mastered Azure Data Factory and seamlessly took over my responsibilities in my absence, demonstrating exceptional ownership and adaptability. Her technical proficiency, willingness to learn, and strong problem-solving skills make her a dependable and highly effective team member. Without hesitation, I wholeheartedly recommend Ananya for a software engineer position. She would be an invaluable asset to any organization.",
          date: "2025"
        }
      ].map((rec, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-purple-400">{rec.name}</h3>
              <span className="text-sm text-gray-400">{rec.date}</span>
            </div>
            <p className="text-sm text-gray-300 mb-1">{rec.role}</p>
            <p className="text-sm text-purple-300">{rec.company}</p>
          </div>
          
          <blockquote className="text-gray-300 italic leading-relaxed text-sm">
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
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
      >
        <Linkedin size={20} className="mr-2" />
        View All Recommendations on LinkedIn
      </a>
    </div>
  </div>
</section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                   onClick={() => setShowBlogPost(post.id)}>
                <div className="text-sm text-purple-400 mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                  Read More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always excited to collaborate on new projects and bring ideas to life. 
          </p>
          
          <div className="text-xl text-gray-300 mb-8">
            <Mail className="inline mr-2" size={20} />
            ananyabarthakur1@gmail.com
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:ananyabarthakur1@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Mail size={20} className="mr-2" />
              Send me an email
            </a>
            <a 
              href="https://www.linkedin.com/in/ananya-barthakur1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://www.linkedin.com/in/ananya-barthakur1/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              <Award className="inline mr-2" size={16} />
              View Professional Recommendations on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ananya Barthakur. 
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