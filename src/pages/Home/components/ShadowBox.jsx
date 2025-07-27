import { useEffect, useState } from 'react';
import './ShadowBox.css';

function ShadowBox({ children, className = '' }) {
  const [scrollDepth, setScrollDepth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const clamped = Math.max(Math.min(scrollY, 600), 100); // max at 300px scroll
      setScrollDepth(clamped);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Merge internal and external class names
  const combinedClassName = `shadow-box ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={{
        boxShadow: `0 5px rgb(${15 - scrollDepth/100}, ${15 - scrollDepth/100}, ${15 - scrollDepth/100}),
          0px 15px ${scrollDepth * scrollDepth / 1000}px rgba(255, 255, 255, ${scrollDepth / 4000})`,
      }}
    >
      {children}
    </div>
  );
}

export default ShadowBox