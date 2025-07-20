import './RightAbout.css';

export const RightAbout = () => {

    const handleDownload = async () => {
        try {
            // Create a blob URL for the PDF
            const response = await fetch('/YamanAjlouniCV.pdf');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'YamanAjlouniCV.pdf';

            // Append to the DOM, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up the object URL
            window.URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download the CV. Please try again later.');
        }
    };

    return (
        <div className='right-container-about'>
            <h3 className='right-title'>About me</h3>

            <p className='about-paragraph'>
                Currently studying <span className="about-highlight">Information Technology (IT)</span> at the International University for Science and Technology, now in my fifth year.
            </p>

            <p className='about-paragraph'>
                I have a <strong>strong passion for front-end development</strong>, where I enjoy turning ideas into beautifully designed, interactive, and responsive websites. My journey in web development has allowed me to work with modern frameworks such as React, and I have hands-on experience in building seamless user interfaces and ensuring the best user experience.
            </p>

            <p className='about-paragraph'>
                In addition to my technical skills, I am always eager to learn new technologies and tools that help me stay on the cutting edge of web development. I'm also focused on writing clean, efficient code and collaborating with designers and back-end developers to bring projects to life.
            </p>

            <div className="signature-section">
                <span className="signature-text">Yaman Ajlouni</span>
                <button
                    className="download-cv"
                    onClick={handleDownload}
                >
                    Download CV
                </button>

            </div>
        </div>
    );
};