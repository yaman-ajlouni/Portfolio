import React, { useEffect, useState } from 'react'
import './Button.css'

export const Button = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <button 
          onClick={scrollToTop}
          className='btn-all-page'
          aria-label="Scroll to top"
        >
          <i className='pi pi-arrow-up'></i>
        </button>
      )}
    </div>
  )
}