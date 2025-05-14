import React from 'react';
import './ServicesCards.css';

export const ServicesCards = (props) => {
  return (
    <div className='services-cards-container'>
      <div className='cards-container'>
        <div className='card-logo'>
          <i className={`pi ${props.icon}`}></i>
        </div>
        <div className='card-title'>{props.title}</div>
        <div className='card-details'>
          <p>{props.details}</p>
        </div>
      </div>
    </div>
  );
};