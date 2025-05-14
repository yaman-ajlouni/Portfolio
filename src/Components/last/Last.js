import React from 'react'
import './Last.css'
import './LastLeft'
import { LastLeft } from './LastLeft'
import { LastRight } from './LastRight'

export const Last = ({ toastRef }) => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    
    return (
        <div id='Contact' className='last-out-container'>
            <div className='last-container'>
                <div className='last-left'>
                    <LastLeft toastRef={toastRef} />
                </div>
                <div className='last-right'>
                    <LastRight />
                </div>
            </div>
            <div className='copyright-section'>
                <div className='copyright-container'>
                    <div className='copyright-line'></div>
                    <div className='copyright-text'>
                        © Copyright : Yaman Ajlouni {currentYear}
                        <div>all rights reserved</div>
                    </div>
                    <div className='copyright-line'></div>
                </div>
            </div>
        </div>
    )
}