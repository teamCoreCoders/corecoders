import React, { useRef, useEffect, useState } from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

export const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScroll, setStartScroll] = useState(0);

  // Constants for track and thumb
  const TRACK_HEIGHT = 200;
  const THUMB_HEIGHT = 50;

  // Update thumb position on scroll
  const updateThumb = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollEl;
    const maxScroll = scrollHeight - clientHeight;
    const maxThumbTop = TRACK_HEIGHT - THUMB_HEIGHT;
    const ratio = maxScroll > 0 ? scrollTop / maxScroll : 0;
    setThumbTop(ratio * maxThumbTop);
  };

  // Scroll content when dragging thumb
  const onThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScroll(scrollRef.current?.scrollTop || 0);
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const deltaY = e.clientY - startY;
      const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const maxThumbTop = TRACK_HEIGHT - THUMB_HEIGHT;
      const newThumbTop = Math.min(Math.max(thumbTop + deltaY, 0), maxThumbTop);
      const ratio = newThumbTop / maxThumbTop;
      scrollRef.current.scrollTop = ratio * maxScroll;
    };
    const onMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
    };
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    // eslint-disable-next-line
  }, [isDragging, startY, startScroll, thumbTop]);

  useEffect(() => {
    updateThumb();
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    scrollEl.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);
    return () => {
      scrollEl.removeEventListener('scroll', updateThumb);
      window.removeEventListener('resize', updateThumb);
    };
  }, []);

  // Hide native scrollbar
  const scrollStyles = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowY: 'scroll' as const,
    height: '100vh',
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={scrollRef}
        style={scrollStyles}
        className="w-full h-full pr-4" // add padding for custom scrollbar
      >
        {children}
      </div>
      {/* Custom Scrollbar */}
      <div
        ref={trackRef}
        className="fixed right-4 top-1/2 z-50"
        style={{
          height: TRACK_HEIGHT,
          transform: 'translateY(-50%)',
        }}
      >
        <div
          className="w-2 rounded-full bg-gray-400/70 dark:bg-gray-500/60 relative"
          style={{ height: TRACK_HEIGHT }}
        >
          <div
            ref={thumbRef}
            className="absolute left-0 w-2 rounded-full cursor-pointer transition-colors duration-200 bg-black dark:bg-white"
            style={{
              top: thumbTop,
              height: THUMB_HEIGHT,
            }}
            onMouseDown={onThumbMouseDown}
          />
        </div>
      </div>
      <style>{`
        [data-custom-scrollbar]::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}; 