import React from 'react';
import { Shield, Rocket, Heart, Award, Star, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const techStack = [
    'React', 'Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 
    'MongoDB', 'Docker', 'AWS', 'Tailwind CSS', 'GraphQL'
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Star },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
    { number: '100%', label: 'Client Satisfaction', icon: Heart }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="about-content">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of full-stack developers dedicated to creating exceptional web applications 
              that drive business success and deliver outstanding user experiences.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Features */}
            <div className="about-features space-y-10">
              <div className="about-feature group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quality First</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      Every line of code is crafted with precision, following best practices and industry standards 
                      to ensure reliability, security, and maintainability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-feature group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Rocket className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovation Driven</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      We stay ahead of the curve by embracing cutting-edge technologies and methodologies 
                      to deliver modern, scalable, and future-proof solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-feature group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Heart className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Client Focused</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      Your success is our priority. We work closely with clients to understand their vision 
                      and deliver solutions that exceed expectations and drive real business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Expertise</h3>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  With years of experience in full-stack development, we specialize in creating robust, 
                  scalable applications using modern technologies and frameworks that power today's digital landscape.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {techStack.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};