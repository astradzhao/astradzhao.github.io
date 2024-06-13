import React, { useState } from 'react';
import './ImageTemplate.css';
import CaptionText from './CaptionText';

function ImageTemplate({ src, alt, caption, date, width, height, x = '-50%', y = '-50%', zoom = 1 }) {
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
                    width: width, 
                    height: height, 
                    '--x': x, 
                    '--y': y, 
                    '--zoom': zoom 
                }} 
                onClick={handleImageClick}
            >
                <div className='image-wrapper'>
                    <img
                        src={src}
                        alt={alt}
                        className='image'
                    />
                </div>
            </div>

            {popupVisible && (
                <div className='popup-overlay' onClick={handleClosePopup}>
                    <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                        <img src={src} alt={alt} className='popup-image' />
                        <CaptionText text={caption} dateText={date}/>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageTemplate;
