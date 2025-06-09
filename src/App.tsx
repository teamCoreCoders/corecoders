import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Preloader } from './components/Preloader';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up smooth scrolling
    gsap.registerPlugin(ScrollTrigger);

    // Floating background elements
    gsap.to('.floating-element-1', {
      y: -20,
      x: 10,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.floating-element-2', {
      y: 15,
      x: -15,
      rotation: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.floating-element-3', {
      y: -10,
      x: 20,
      rotation: 2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // About section animations
    gsap.fromTo('.about-content', 
      { 
        opacity: 0, 
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.about-feature', 
      { 
        opacity: 0, 
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-features',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Projects section animations
    gsap.fromTo('.projects-content', 
      { 
        opacity: 0, 
        y: 80 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.project-card', 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Contact section animations
    gsap.fromTo('.contact-content', 
      { 
        opacity: 0, 
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effects
    gsap.to('.parallax-slow', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.parallax-fast', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Section tracking
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId && !isAnimating) {
            setCurrentSection(parseInt(sectionId));
          }
        }
      });
    }, observerOptions);

    const sectionsToObserve = document.querySelectorAll('[data-section]');
    sectionsToObserve.forEach((section) => observer.observe(section));

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
    };
  }, [isAnimating]);

  const navigateToSection = (sectionIndex: number) => {
    if (isAnimating || sectionIndex === currentSection) return;

    setIsAnimating(true);
    
    const sectionElements = document.querySelectorAll('[data-section]');
    const targetElement = sectionElements[sectionIndex] as HTMLElement;
    
    if (targetElement) {
      gsap.to(window, {
        scrollTo: {
          y: targetElement.offsetTop,
          autoKill: false
        },
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          setCurrentSection(sectionIndex);
          setIsAnimating(false);
        }
      });
    }
  };

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div ref={mainRef} className="relative">
          <Navigation currentSection={currentSection} onNavigate={navigateToSection} />
          <ThemeToggle />
          
          {/* Floating background elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="floating-element-1 absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
            <div className="floating-element-2 absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>
            <div className="floating-element-3 absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/5 rounded-full blur-lg"></div>
          </div>
          
          {/* Hero Section */}
          <div data-section="0" className="min-h-screen relative z-10">
            <Hero />
          </div>
          
          {/* About Section */}
          <div data-section="1" className="min-h-screen relative z-10 about-section">
            <About />
          </div>
          
          {/* Projects Section */}
          <div data-section="2" className="min-h-screen relative z-10 projects-section">
            <Projects />
          </div>
          
          {/* Contact Section */}
          <div data-section="3" className="min-h-screen relative z-10 contact-section">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default App;