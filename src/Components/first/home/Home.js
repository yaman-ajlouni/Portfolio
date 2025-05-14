import React, { useEffect } from 'react';
import './Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Home = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer', 'UI/UX Designer', 'Web Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 70,
  });

  // Subtle parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const circles = document.querySelectorAll('.backdrop-circle');

      if (circles[0]) {
        circles[0].style.transform = `translate(${x * -30}px, ${y * -30}px)`;
      }

      if (circles[1]) {
        circles[1].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="Home" className="home-container">
      <div className="content-section">
        <div className="text-section">
          <h2 className="subtitle">Welcome to my portfolio</h2>
          <h1 className="name">Yaman Ajlouni</h1>

          <div className="profession">
            <span className="profession-text">{text}</span>
            <Cursor cursorStyle="|" />
          </div>

          <div className="separator"></div>

          <p className="introduction">
            Creating elegant digital experiences with a focus on aesthetics and functionality.
            Transforming ideas into seamless user interfaces that captivate and engage.
          </p>

          <div className="cta-container">
            <a href="#Projects" className="cta-button primary">View Portfolio</a>
            <a href='#Contact' className="cta-button secondary">Contact Me</a>
          </div>
        </div>

        <div className="image-section">
          <div className="image-container">
            <div className="image-frame">
              <img
                className="profile-image"
                src={require('../../assets/images/Yaman.jpg')}
                alt="Yaman Ajlouni"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="social-bar">
        <a href="https://www.linkedin.com/in/yaman-ajlouni-876b17221/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        <span className="social-divider">•</span>
        <a href="https://github.com/YamanAjlouni" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        <span className="social-divider">•</span>
        <a href="https://dribbble.com/YamanAjlouni" target="_blank" rel="noopener noreferrer" className="social-link">Dribbble</a>
      </div>
    </div>
  );
};