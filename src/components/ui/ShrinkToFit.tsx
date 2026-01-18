import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';

interface ShrinkToFitProps {
  children: string; // Expect a string for accurate measurement
  className?: string;
  maxFontSize?: number;
  minFontSize?: number;
}

const ShrinkToFit: React.FC<ShrinkToFitProps> = ({ children, className, maxFontSize = 18, minFontSize = 6 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  const resize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const tempSpan = document.createElement('span');
    const computed = window.getComputedStyle(container);
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.fontFamily = computed.fontFamily;
    tempSpan.style.fontWeight = computed.fontWeight;
    tempSpan.style.fontStyle = computed.fontStyle;
    tempSpan.style.letterSpacing = computed.letterSpacing;
    tempSpan.style.textTransform = computed.textTransform;
    tempSpan.textContent = children;
    
    document.body.appendChild(tempSpan);

    let currentSize = maxFontSize;
    tempSpan.style.fontSize = `${currentSize}px`;

    // Adjust font size until it fits container width
    while (tempSpan.scrollWidth > container.clientWidth && currentSize > minFontSize) {
      currentSize--;
      tempSpan.style.fontSize = `${currentSize}px`;
    }

    document.body.removeChild(tempSpan);
    setFontSize(currentSize);

  }, [children, maxFontSize, minFontSize]);

  useLayoutEffect(() => {
    // Run resize on mount, on window resize, and when fonts finish loading.
    resize();
    window.addEventListener('resize', resize);

    let observer: ResizeObserver | null = null;
    if (containerRef.current && 'ResizeObserver' in window) {
      observer = new ResizeObserver(() => resize());
      observer.observe(containerRef.current);
    }

    const fontSet = document.fonts;
    const handleFonts = () => resize();
    if (fontSet?.addEventListener) {
      fontSet.addEventListener('loadingdone', handleFonts);
    }
    if (fontSet?.ready) {
      fontSet.ready.then(handleFonts);
    }

    return () => {
      window.removeEventListener('resize', resize);
      observer?.disconnect();
      if (fontSet?.removeEventListener) {
        fontSet.removeEventListener('loadingdone', handleFonts);
      }
    };
  }, [resize]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden whitespace-nowrap ${className}`}
      style={{ fontSize: `${fontSize}px`, lineHeight: '1' }} // Set line-height to 1 to prevent vertical jumps
    >
      {children}
    </div>
  );
};

export default ShrinkToFit;
