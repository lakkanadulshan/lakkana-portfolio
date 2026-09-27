import React, { useEffect, useState } from 'react';

export default function ScrollProgressRoute() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top Screen Progress Bar (Ultra-clean modern touch) */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-neutral-900 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#84cc16] to-[#a3e635] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(132,204,22,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Vertical Route Line on the Right Margin (Visible on desktop) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 h-64 w-1 z-40 flex-col items-center pointer-events-none">
        {/* Background track line */}
        <div className="relative w-[2px] h-full bg-neutral-800/80 rounded-full overflow-hidden">
          {/* Active moving tracer line */}
          <div
            className="w-full bg-gradient-to-b from-[#84cc16] to-[#a3e635] shadow-[0_0_10px_#84cc16] transition-all duration-150 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Dynamic coordinate percentage indicator */}
        <span className="mt-3 font-mono text-[10px] text-[#a3e635] tracking-widest">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
}