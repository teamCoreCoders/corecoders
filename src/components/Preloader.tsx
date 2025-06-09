import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Preloader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const keyholeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.6,
          pointerEvents: 'none',
          onComplete: onFinish,
        });
      },
    });
    tl.fromTo(
      keyholeRef.current,
      { scale: 0.7, rotate: 0, opacity: 1 },
      { scale: 1.2, rotate: 360, duration: 1.2, ease: 'power4.inOut' }
    ).to(
      keyholeRef.current,
      { scale: 30, opacity: 0, duration: 0.8, ease: 'power4.in' },
      '+=0.2'
    );
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 transition-opacity duration-700"
    >
      <div ref={keyholeRef} className="relative flex flex-col items-center">
        {/* Keyhole Circle */}
        <div className="w-24 h-24 bg-white rounded-full shadow-2xl" />
        {/* Keyhole Rectangle */}
        <div className="w-6 h-12 bg-white rounded-b-2xl mt-[-12px] shadow-xl" />
      </div>
    </div>
  );
}; 