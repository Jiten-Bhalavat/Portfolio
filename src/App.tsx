import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Play, 
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Youtube,
  FileText,
  ChevronDown,
  Menu,
  X,
  User,
  Brain,
  Globe,
  Settings,
  BookOpen,
  Video,
  PenTool,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "Machine Learning Engineer",
    "AI Engineer", 
    "Data Scientist",
    "LLM Developer"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'youtube', 'medium', 'experience', 'education', 'contact'];
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

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing animation
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed (faster than typing)
        return () => clearTimeout(timeout);
      } else {
        // Move to next role and start typing
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "AI Voice Assistant",
      description: "Intelligent conversational AI using natural language processing and LLMs for customer support automation",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Speech-to-Text", "Text-to-Speech", "Large Language Models", "OpenAI", "Whisper"],
      github: "https://github.com/Jiten-Bhalavat/Voice-AI-Agent",
      demo: "#"
    },
    {
      title: "RAG Document Assistant",
      description: "Retrieval-Augmented Generation system for intelligent document querying with vector embeddings",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "FAISS", "Transformers", "Streamlit"],
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Analytics",
      description: "Real-time object detection and classification system using CNN architectures",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["OpenCV", "PyTorch", "YOLO", "Flask"],
      github: "#",
      demo: "#"
    }
  ];

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain size={32} className="text-blue-600" />,
      skills: [
        { name: "LLMs", level: 85 },
        { name: "RAG Pipelines", level: 85 },
        { name: "Vector Search (FAISS, Pinecone)", level: 85 },
        { name: "CNN / RNN / Transformers", level: 75 },
        { name: "Time Series Analysis", level: 70 }
      ]
    },
    {
      title: "Software & Web Dev",
      icon: <Code size={32} className="text-green-600" />,
      skills: [
        { name: "React.js / TypeScript", level: 90 },
        { name: "Node.js / Express.js", level: 80 },
        { name: "REST APIs / Flask / FastAPI", level: 85 },
        { name: "MongoDB / PostgreSQL", level: 70 },
        { name: "HTML/CSS / Tailwind", level: 90 }
      ]
    },
    {
      title: "Tools, Platforms & DevOps",
      icon: <Settings size={32} className="text-purple-600" />,
      skills: [
        { name: "Git / GitHub / VS Code", level: 90 },
        { name: "Docker / Kubernetes", level: 75 },
        { name: "AWS / GCP / Azure", level: 60 },
        { name: "LangChain", level: 80 },
        { name: "Jupyter / Colab / Tableau", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "2023",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "LangChain for LLM Application Development",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const youtubeVideos = [
    {
      title: "Building RAG Applications with LangChain",
      views: "15K views",
      duration: "12:45",
      thumbnail: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#"
    },
    {
      title: "Complete Guide to Vector Databases",
      views: "8.2K views",
      duration: "18:30",
      thumbnail: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#"
    },
    {
      title: "Fine-tuning LLMs for Custom Tasks",
      views: "22K views",
      duration: "25:15",
      thumbnail: "https://images.pexels.com/photos/4348407/pexels-photo-4348407.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#"
    }
  ];

  const mediumArticles = [
    {
      title: "Understanding Retrieval-Augmented Generation (RAG)",
      excerpt: "A comprehensive guide to implementing RAG systems for enhanced AI applications...",
      readTime: "8 min read",
      claps: "245",
      date: "Dec 15, 2024",
      url: "#"
    },
    {
      title: "Vector Embeddings: The Foundation of Modern AI",
      excerpt: "Exploring how vector embeddings power search, recommendations, and LLM applications...",
      readTime: "6 min read",
      claps: "189",
      date: "Nov 28, 2024",
      url: "#"
    },
    {
      title: "Building Production-Ready LLM Applications",
      excerpt: "Best practices for deploying and scaling large language model applications in production...",
      readTime: "12 min read",
      claps: "312",
      date: "Nov 10, 2024",
      url: "#"
    }
  ];

  const workExperience = [
    {
      title: "AI Engineer Intern",
      company: "TechCorp AI Solutions",
      location: "San Francisco, CA",
      period: "Jun 2024 - Present",
      description: "Developing RAG-based document processing systems and fine-tuning LLMs for customer support automation.",
      achievements: [
        "Built RAG pipeline reducing query response time by 60%",
        "Implemented vector search with 95% accuracy improvement",
        "Deployed ML models serving 10K+ daily requests"
      ]
    },
    {
      title: "Machine Learning Research Assistant",
      company: "Stanford AI Lab",
      location: "Stanford, CA",
      period: "Jan 2024 - May 2024",
      description: "Conducted research on transformer architectures and contributed to open-source ML frameworks.",
      achievements: [
        "Published 2 research papers on attention mechanisms",
        "Contributed to PyTorch Lightning framework",
        "Mentored 5 undergraduate students in ML projects"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "DataTech Solutions",
      location: "Mumbai, India",
      period: "May 2023 - Aug 2023",
      description: "Developed full-stack web applications and implemented data analytics dashboards.",
      achievements: [
        "Built React.js dashboard with real-time analytics",
        "Optimized database queries improving performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2022 - 2024",
      gpa: "3.9/4.0",
      description: "Specialized in Machine Learning, Deep Learning, and Natural Language Processing",
      coursework: ["Advanced Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Indian Institute of Technology",
      location: "Mumbai, India",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      description: "Graduated with First Class Honors, focused on AI and Software Engineering",
      coursework: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Software Engineering"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' },
                { name: 'AI Assistant', id: 'ai-assistant' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' },
                { name: 'AI Assistant', id: 'ai-assistant' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('/images/Jiten-Bhalavat-Graph.jpg')" }}
        ></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/65 via-blue-50/65 to-pink-50/65"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jiten Bhalavat</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 italic">
            A curious mind always dreaming of building his own startup
          </p>
          <div className="h-16 flex items-center justify-center mb-12">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium">
              <span className="inline-block min-w-0">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com/Jiten-Bhalavat/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Github size={24} className="text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/jiten-bhalavat/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a href="mailto:jbha0504@umd.edu" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Mail size={24} className="text-green-600" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About text */}
            <div>
              <div className="flex items-center mb-6">
                <User size={48} className="text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                Hey there! I’m Jiten Bhalavat, part data scientist, part <strong>Startup Dreamer</strong> , and full-time <strong>curious Human</strong>. I’ve worn a bunch of hats so far: from <strong>leading data science clubs</strong> and <strong>winning hackathons</strong> to building retrieval-augmented chatbots that can actually talk back without hallucinating (most of the time). I’ve dabbled in everything from emotion detection and video analytics to cleaning the messiest of datasets that looked like they’d been through a blender.
                </p>
                <p>I’m a strong believer that good tech should be smart, simple, and a little bit magical, which is why I’m always exploring new models, trends, and opportunities to build something meaningful (or at least mildly impressive). Outside of code, <strong>I've managed events</strong>, <strong>mentored peers</strong>, and spent far too much time figuring out why my <strong>code worked perfectly at 2 AM but refused to cooperate at 9.</strong> Basically, if it involves <strong>AI</strong>, <strong>storytelling</strong>, or <strong>solving real-world problems</strong>, I’m all in, with a cup of <strong>Expresso</strong> in hand.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {['AI/ML', 'Python', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'Startup', 'Hackathons'].map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="lg:text-right">
              <div className="relative inline-block">
                <img
                  src="/images/Jiten-Bhalavat-Speaking-1.jpg"
                  alt="Jiten Bhalavat"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <Code size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Code size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my AI and machine learning projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://github.com/Jiten-Bhalavat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View More Projects
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                        <span className="text-blue-600 font-medium text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600">Professional credentials and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <span className="text-blue-600 font-medium text-sm">{cert.date}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.credly.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View More Certifications
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Content Section */}
      <section id="youtube" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Youtube size={48} className="text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">YouTube Content</h2>
            <p className="text-xl text-gray-600">Educational videos on AI and Machine Learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play size={48} className="text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.youtube.com/@AI-Agents-official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              View More Videos
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Medium Articles Section */}
      <section id="medium" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <PenTool size={48} className="text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medium Articles</h2>
            <p className="text-xl text-gray-600">Technical insights and tutorials</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediumArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 text-sm font-medium">👏 {article.claps} claps</span>
                  <a href={article.url} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://infinityai.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              View More Articles
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">Professional journey and achievements</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 font-medium">{job.period}</p>
                        <p className="text-gray-500 text-sm flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GraduationCap size={48} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">Academic journey and achievements</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 font-medium">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 font-medium">{edu.period}</p>
                        <p className="text-gray-500 text-sm flex items-center justify-end">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </p>
                        <p className="text-green-600 font-medium text-sm">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative AI projects. 
            Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/Jiten-Bhalavat/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group">
              <Github size={32} className="text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/jiten-bhalavat/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group">
              <Linkedin size={32} className="text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:jbha0504@umd.edu" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group">
              <Mail size={32} className="text-green-400 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@AI-Agents-official" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group">
              <Youtube size={32} className="text-red-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2024 Jiten Bhalavat. Crafted with passion for AI and innovation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;