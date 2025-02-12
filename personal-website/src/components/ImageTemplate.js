import React, { useState } from 'react';
import './ImageTemplate.css';
import CaptionText from './CaptionText';

function ImageTemplate({ 
    src, 
    alt, 
    caption, 
    date,
    location, 
    width = '100%', 
    height, 
    x = '-50%', 
    y = '-50%', 
    zoom = 1, 
    gridArea,
    translateX = '0px',
    translateY = '0px'
}) {
    const [popupVisible, setPopupVisible] = useState(false);

    const handleImageClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <div 
                className='image-template'
                style={{ 
                    width, 
                    height, 
                    gridArea,
                    transform: `translate(${translateX}, ${translateY})`
                }} 
                onClick={handleImageClick}
            >
                <div className='image-wrapper'>
                    <img
                        src={src}
                        alt={alt}
                        className='image'
                        style={{
                            '--x': x,
                            '--y': y,
                            '--zoom': zoom
                        }}
                    />
                </div>
            </div>

            {popupVisible && (
                <div className='popup-overlay' onClick={handleClosePopup}>
                    <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                        <img src={src} alt={alt} className='popup-image' />
                        <CaptionText text={caption} dateText={date} location={location}/>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageTemplate;
