import React, { useEffect } from 'react';
import './About.css';
import { LeftAbout } from './LeftAbout';
import { RightAbout } from './RightAbout';

export const About = () => {
  // Animate skill bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = bar.getAttribute('data-width');
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.3 });

    const skillsContainer = document.querySelector('.left-skills-container');
    if (skillsContainer) {
      observer.observe(skillsContainer);
    }

    return () => {
      if (skillsContainer) {
        observer.unobserve(skillsContainer);
      }
    };
  }, []);

  return (
    <div id='About' className='About-out-container'>
      {/* Background accents for consistency */}
      <div className="bg-accent-1"></div>
      <div className="bg-accent-2"></div>
      
      <h2 className="section-title">About Me</h2>
      
      <div className='About-container'>
        <div className='left-about'>
          <LeftAbout 
            name={"Yaman Ajlouni"} 
            profile={"Front-end Developer"} 
            email={"yamanajlouni1@hotmail.com"} 
            phone={'0991951452'} 
          />
        </div>
        <div className='right-about'>
          <RightAbout />
        </div>
      </div>
    </div>
  );
};