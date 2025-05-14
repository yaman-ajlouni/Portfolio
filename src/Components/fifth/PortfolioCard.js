import React from 'react'
import './PortfolioCard.css'

export const PortfolioCard = (props) => {
    return (
        <a className='portfolio-card-container' href={props.link} target="_blank" rel="noopener noreferrer">
            <div className='portfolio-image'>
                <div className='portfolio-image-container'>
                    <img className='portfolio-image2' src={props.image}  alt="image of project" />
                </div>
            </div>
            <div className='portfolio-details'>
                <div className='portfolio-details-left'>
                    <p>{props.title}</p>
                    <span>{props.category} </span>
                    <div>
                        {props.date}
                    </div>
                </div>
                <div className='portfolio-details-right'>
                    <button className='portfolio-card-button'>+</button>
                </div>
            </div>
        </a>

    )
}
