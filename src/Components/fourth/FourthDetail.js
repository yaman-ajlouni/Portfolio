import React, { useState, useEffect } from 'react';
import './FourthDetail.css';

export const FourthDetail = ({ icon, counter, title, startCounting }) => {
  const [count, setCount] = useState(0);
  
  // Animate count when section becomes visible
  useEffect(() => {
    if (startCounting) {
      let start = 0;
      const end = parseInt(counter);
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 50); // Update every 50ms
      
      // Don't run animation for zero value
      if (end === 0) {
        setCount(0);
        return;
      }
      
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [startCounting, counter]);
  
  return (
    <div className='fourth-details-container'>
      <div className='fourth-logo'>
        <i className={`pi ${icon}`}></i>
      </div>
      <div className='fourth-details'>
        <h3>{startCounting ? count : 0}</h3>
        <span>{title}</span>
      </div>
    </div>
  );
};