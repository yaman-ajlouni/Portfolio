import React from 'react'
import './Portfolio.css'
import { PortfolioCard } from './PortfolioCard'

export const Portfolio = () => {
    // Example data for the portfolio cards
    const portfolioData = [
        {
            image: require('../assets/images/mirruba.png'),
            title: "Mirruba Jewelry",
            category: "Web Development",
            date: "07 Aug. 2024",
            link: "https://mirruba-jewellery.com/"
        },
        {
            image: require('../assets/images/AlAseel.png'),
            title: "Al Aseel Sweets",
            category: "Web Development",
            date: "05 Sep. 2024",
            link: "https://alaseel-sweets.netlify.app/"
        }, {
            image: require('../assets/images/portfolioMain.png'),
            title: "Yaman Ajlouni Portfolio",
            category: "Web Development",
            date: "01 Apr. 2024",
            link: "https://yaman-ajlouni-portfolio.netlify.app/"
        },
    ];

    return (
        <div id='Projects' className='portfolio-container'>
            <div className='portfolio-topic'>
                <h2>PROJECTS</h2>
                <p>Some Of Projects I have Made.</p>
                <div className='portfolio-line'></div>
            </div>
            <div className='portfolio-card-container2'>
                {portfolioData.map((project, index) => (
                    <PortfolioCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        category={project.category}
                        date={project.date}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}
