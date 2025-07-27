import { useEffect, useState } from 'react';

function HomeSlogan({ children, className = '' }) {
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [textColor, setTextColor] = useState(100,100,100);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('home-slogan');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // You can adjust the trigger zone here
      const visibleRatio = 1 - Math.max(0, rect.top) / windowHeight;
      const opacityClamped = Math.max(0, Math.min(visibleRatio, 1));
      setShadowOpacity(opacityClamped);

      const colorRatio = 1 - rect.top / windowHeight;
      const colorClamped = Math.max(0, Math.min(1, colorRatio));
      const brightness = Math.round(100 + colorClamped * 300); // 100 → 255
      const textColor = `rgb(
        ${brightness}, 
        ${brightness}, 
        ${brightness})
      `;

      setTextColor(textColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shadow = `
    0 0 40px rgba(0,0,0),
    0.5vh 1vh 2px rgba(80,80,100,${0.5 * shadowOpacity}),
    1vh 2vh 4px rgba(48,48,112,${0.7 * shadowOpacity}),
    1.75vh 3.5vh 6px rgba(20,20,52,${shadowOpacity})
  `;

  const combinedClassName = `shadow-box ${className}`.trim();

  return (
    <h1
      id="home-slogan"
      className={combinedClassName}
      style={{ 
        textShadow: shadow,
        color: textColor
      }}
    >
      {children}
    </h1>
  );
}

export default HomeSlogan