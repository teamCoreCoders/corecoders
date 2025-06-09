import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Calendar, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@corecoders.dev',
      href: 'mailto:hello@corecoders.dev',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+1234567890',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'purple'
    }
  ];

  const benefits = [
    { icon: Zap, text: 'Expert full-stack development team' },
    { icon: CheckCircle, text: 'Modern technologies and best practices' },
    { icon: MessageSquare, text: 'Scalable and maintainable solutions' },
    { icon: Calendar, text: 'Dedicated support and maintenance' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="contact-content">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can help bring your vision to life 
              with our expertise in full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              {/* Contact Methods */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Connect
                </h3>
                
                <div className="space-y-8">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-6 group">
                      <div className={`w-16 h-16 bg-gradient-to-br ${
                        method.color === 'blue' ? 'from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50' :
                        method.color === 'green' ? 'from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50' :
                        'from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50'
                      } rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <method.icon className={`w-8 h-8 ${
                          method.color === 'blue' ? 'text-blue-500' :
                          method.color === 'green' ? 'text-green-500' :
                          'text-purple-500'
                        }`} />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">{method.title}</p>
                        <a
                          href={method.href}
                          className={`text-lg text-gray-600 dark:text-gray-300 hover:${
                            method.color === 'blue' ? 'text-blue-500' :
                            method.color === 'green' ? 'text-green-500' :
                            'text-purple-500'
                          } transition-colors duration-300`}
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">Why Choose Core Coders?</h3>
                <ul className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};