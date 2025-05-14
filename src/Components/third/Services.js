import React, { useEffect } from 'react';
import './Services.css';
import { ServicesCards } from './ServicesCards';
import 'primeicons/primeicons.css';

export const Services = () => {
  // Add scroll reveal animation for service cards
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const serviceCards = document.querySelectorAll('.services-cards-container');
    serviceCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div id='Services' className='services-container'>
      {/* Background accents for consistency */}
      <div className="bg-accent-1"></div>
      <div className="bg-accent-2"></div>
      
      <div className='services-topic'>
        <h2>SERVICES</h2>
        <p>The Services I Provide For You</p>
        <div className='services-line'></div>
      </div>
      
      <div className='services-cards'>
        <ServicesCards 
          icon={'pi-desktop'} 
          title='WEB DESIGN' 
          details="Creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look."
        />
        <ServicesCards 
          icon={'pi-code'} 
          title='WEB DEVELOPMENT' 
          details="Creating, building, and maintaining websites and web applications that run online on a browser." 
        />
        <ServicesCards 
          icon={'pi-mobile'} 
          title='RESPONSIVE DESIGN' 
          details="Make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction."
        />
        <ServicesCards 
          icon={'pi-palette'} 
          title='UI UX'  
          details="Creating visually appealing and intuitive interfaces, including elements such as layouts, typography, and colors."
        />
      </div>
    </div>
  );
};