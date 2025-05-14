import { useEffect, useState, useRef } from 'react';
import './Fourth.css';
import { FourthDetail } from './FourthDetail';

export const Fourth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current; // خزن المرجع في متغير

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className='fourth-container' ref={sectionRef} style={{
      backgroundImage: 'url(../assets/jobs.jpg)'
    }}>
      {/* Dark overlay with our theme */}
      <div className="fourth-overlay"></div>

      {/* Gold accent pattern */}
      <div className="fourth-pattern"></div>

      {/* Content container */}
      <div className="fourth-content">
        <FourthDetail
          icon="pi-check"
          counter="8"
          title="WORKS COMPLETED"
          startCounting={isVisible}
        />
        <FourthDetail
          icon="pi-book"
          counter="2"
          title="YEARS OF EXPERIENCE"
          startCounting={isVisible}
        />
        <FourthDetail
          icon="pi-users"
          counter="7"
          title="TOTAL CLIENTS"
          startCounting={isVisible}
        />
      </div>
    </div>
  );
};