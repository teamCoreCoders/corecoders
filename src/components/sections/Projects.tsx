import React from 'react';
import { ExternalLink, Github, BarChart3, Users, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'EcoTech Dashboard',
      description: 'A comprehensive environmental monitoring platform with real-time data visualization, predictive analytics, and automated reporting for sustainability management.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'Docker'],
      icon: BarChart3,
      color: 'green',
      demoUrl: 'https://ecotech-demo.com',
      githubUrl: 'https://github.com/core-coders/ecotech-dashboard',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'ConnectHub Pro',
      description: 'Enterprise collaboration platform featuring team management, project tracking, real-time messaging, and integrated video conferencing for remote teams.',
      techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'AWS'],
      icon: Users,
      color: 'blue',
      demoUrl: 'https://connecthub-demo.com',
      githubUrl: 'https://github.com/core-coders/connecthub-pro',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="projects-content">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing our latest work - from innovative dashboards to enterprise solutions, 
              each project represents our commitment to excellence and cutting-edge technology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card group flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-16`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white rounded-full font-semibold text-sm hover:bg-gray-900 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${
                      project.color === 'green' 
                        ? 'from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50' 
                        : 'from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50'
                    } rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <project.icon className={`w-10 h-10 ${
                        project.color === 'green' ? 'text-green-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-6 pt-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-600/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss how we can bring your vision to life
              </p>
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span>View All Projects</span>
                <ExternalLink className="inline-block w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};