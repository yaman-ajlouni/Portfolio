import React from 'react';
import './LeftAbout.css';

export const LeftAbout = (props) => {
    return (
        <div className='left-container-about'>
            <div className='left-info'>
                <div className='left-info-img-container'>
                    <img 
                        className='left-info-img' 
                        src={require('../assets/images/yaman.png')} 
                        alt="Yaman Ajlouni" 
                    />
                </div>
                <div className='left-info-details'>
                    <div className="info-item">
                        <span className="info-label">Name</span>
                        <span className="info-value">{props.name}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Profile</span>
                        <span className="info-value">{props.profile}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email</span>
                        <span className="info-value">{props.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Phone</span>
                        <span className="info-value">{props.phone}</span>
                    </div>
                </div>
            </div>
            
            <div className='left-skills'>
                <h3>Skills</h3>
                <div className='left-skills-container'>
                    <div className="skill-item skill-html">
                        <div className="skill-info">
                            <span className="skill-name">HTML</span>
                            <span className="skill-percentage">85%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress" data-width="85%"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item skill-css">
                        <div className="skill-info">
                            <span className="skill-name">CSS</span>
                            <span className="skill-percentage">80%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress" data-width="80%"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item skill-js">
                        <div className="skill-info">
                            <span className="skill-name">JAVASCRIPT</span>
                            <span className="skill-percentage">80%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress" data-width="80%"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item skill-react">
                        <div className="skill-info">
                            <span className="skill-name">React</span>
                            <span className="skill-percentage">90%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress" data-width="90%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};