import React from 'react';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl">
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Core <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Coders</span>
        </h1>
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
          We Build <span className="font-semibold text-blue-500">Full-Stack Solutions</span>
        </p>
        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Expert full-stack developers crafting high-quality web applications with modern technologies. From concept to deployment, we deliver exceptional digital experiences that drive business success.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition">
            <span className="flex items-center gap-2">Get in Touch <ArrowRight className="w-5 h-5" /></span>
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
            View Our Work
          </button>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Optimized performance with modern architectures and cutting-edge technologies</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Clean Code</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Maintainable, scalable, and well-documented code following industry best practices</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Experienced developers passionate about delivering exceptional results</p>
          </div>
        </div>
      </div>
    </section>
  );
};