import React, { useState, useEffect } from 'react';
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
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = React.useRef(null);

    // Optimized intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px' // Preload images slightly before they enter viewport
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Remove the separate preload effect and combine it
    const handleImageLoad = React.useCallback(() => {
        if (!popupVisible) {
            const preloadImage = new Image();
            preloadImage.src = src;
        }
    }, [src, popupVisible]);

    const handleImageClick = () => {
        setPopupVisible(true);
        setTimeout(() => setIsVisible(true), 50);
    };

    const handleClosePopup = () => {
        setIsVisible(false);
        setTimeout(() => setPopupVisible(false), 300);
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
                    {isLoaded ? (
                        <img
                            src={src}
                            alt={alt}
                            className='image'
                            onLoad={handleImageLoad}
                            style={{
                                '--x': x,
                                '--y': y,
                                '--zoom': zoom
                            }}
                        />
                    ) : (
                        <div 
                            ref={imageRef}
                            className="image-placeholder"
                            style={{ height: height }}
                        />
                    )}
                </div>
            </div>

            {popupVisible && (
                <div 
                    className={`popup-overlay ${isVisible ? 'visible' : ''}`}
                    onClick={handleClosePopup}
                >
                    <div 
                        className={`popup-content ${isVisible ? 'visible' : ''}`} 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className={`close-button ${isVisible ? 'visible' : ''}`} 
                            onClick={handleClosePopup}
                        >
                            close
                        </button>
                        <img 
                            src={src} 
                            alt={alt} 
                            className='popup-image'
                        />
                        <CaptionText 
                            text={caption} 
                            dateText={date} 
                            location={location}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default React.memo(ImageTemplate);
