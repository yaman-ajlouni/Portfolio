import './TwoPeople.css'

export const TwoPeople = () => {
    return (
        <div className='people-out-container'>
            <div className='people-container'>
                <img 
                    src={require('../assets/images/yaman-old.jpg')} 
                    style={{ width: 150, height: 150, borderRadius: 150 }} 
                    alt="Yaman Ajlouni" 
                />
                <h2>Yaman Ajlouni</h2>
                <p>
                    Responsible for the creation and implementation of web-related projects and maintenance.
                </p>
            </div>
            
            {/* Optional decorative element instead of navigation dots */}
            <div className='profile-accent-line'></div>
        </div>
    )
}