// AnimatedText.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = element.textContent || '';
    element.textContent = '';

    const chars = text.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      element.appendChild(span);
      return span;
    });

    gsap.to(chars, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      Sea cual sea tu empresa y tu sector, podemos hacerlo.
    </div>
  );
};

export default AnimatedText;
