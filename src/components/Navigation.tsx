import React from 'react';
import { Code2 } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const sections = ['Hero', 'About', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-6 left-6 z-50 flex items-center space-x-6">
      <div className="flex items-center space-x-2 text-gray-800 dark:text-white">
        <Code2 className="w-6 h-6 text-blue-500" />
        <span className="font-bold text-lg">Core Coders</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onNavigate(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentSection === index
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-700 dark:text-gray-300 hover:bg-white/20'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      
      <div className="md:hidden flex space-x-1">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-blue-500 w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </nav>
  );
};