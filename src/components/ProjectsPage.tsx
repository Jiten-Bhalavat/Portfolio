import { useState, useEffect } from 'react';
import { Code, Github, ExternalLink, ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projects';

const DESCRIPTION_LIMIT = 120; // characters before truncation

// Project type for modal
type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return { text, isTruncated: false };
    return { text: text.slice(0, limit).trim() + '...', isTruncated: true };
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Code size={48} className="text-blue-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">All Projects</h1>
              <p className="text-xl text-gray-600 mt-2">A comprehensive showcase of my AI and machine learning projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => {
            const { text: truncatedText, isTruncated } = truncateText(project.description, DESCRIPTION_LIMIT);
            
            return (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {(project.github || project.demo) && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.github && project.github !== "" && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && project.demo !== "" && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <p>
                      {truncatedText}
                      {isTruncated && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="ml-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          Read more
                        </button>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-14rem)]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.github && selectedProject.github !== "" && selectedProject.github !== "#" && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== "" && selectedProject.demo !== "#" && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage; 