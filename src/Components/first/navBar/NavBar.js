import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
        // Prevent body scrolling when menu is open
        document.body.style.overflow = !showMenu ? 'hidden' : '';
    };

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.menu-toggle')) {
                setShowMenu(false);
                document.body.style.overflow = '';
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, []);

    // Handle navbar style changes on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when clicking a nav link
    const handleNavLinkClick = () => {
        setShowMenu(false);
        document.body.style.overflow = '';
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
            <div className='nav-container'>
                <div className='left-nav'>
                    <Link className='left-nav-item' to='/'>
                        <img
                            className='left-nav-item-image-desktop'
                            src={require('../../assets/logo-images/Yaman-Ajlouni-full-logo-white.png')}
                            alt="Yaman Ajlouni"
                        />
                        <img
                            className='left-nav-item-image-mobile'
                            src={require('../../assets/logo-images/Yaman-Ajlouni-logo-white.png')}
                            alt="Yaman Ajlouni"
                        />
                    </Link>
                </div>

                <div className='right-nav'>
                    {/* Hamburger Menu */}
                    <div className='right-button-navbar'>
                        <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`navbar-details-container ${showMenu ? 'active' : ''}`} ref={menuRef}>
                        <li><a className='nav-Links' href="#Home" onClick={handleNavLinkClick}>Home</a></li>
                        <li><a className='nav-Links' href="#About" onClick={handleNavLinkClick}>About</a></li>
                        <li><a className='nav-Links' href="#Services" onClick={handleNavLinkClick}>Services</a></li>
                        <li><a className='nav-Links' href="#Projects" onClick={handleNavLinkClick}>Projects</a></li>
                        <li><a className='nav-Links' href="#Contact" onClick={handleNavLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};