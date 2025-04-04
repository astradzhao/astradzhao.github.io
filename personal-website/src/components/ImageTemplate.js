import React, { useState, useEffect } from 'react';
import './ImageTemplate.css';
import CaptionText from './CaptionText';

// Create a shared IntersectionObserver instance outside the component
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const component = entry.target.__component;
                if (component) {
                    component.handleIntersection();
                }
            }
        });
    },
    { 
        threshold: 0.1,
        rootMargin: '100px'
    }
);

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
    const componentRef = React.useRef({ handleIntersection: () => setIsLoaded(true) });

    // Optimized intersection observer setup
    useEffect(() => {
        const currentRef = imageRef.current;
        if (currentRef) {
            currentRef.__component = componentRef.current;
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                currentRef.__component = null;
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Simplified popup handlers
    const handleImageClick = React.useCallback(() => {
        setPopupVisible(true);
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const handleClosePopup = React.useCallback(() => {
        setIsVisible(false);
        setTimeout(() => setPopupVisible(false), 300);
    }, []);

    // Memoize the main content to prevent unnecessary re-renders
    const mainContent = React.useMemo(() => (
        <div className='image-wrapper'>
            {isLoaded ? (
                <img
                    src={src}
                    alt={alt}
                    className='image'
                    loading="lazy"
                    decoding="async"
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
    ), [isLoaded, src, alt, x, y, zoom, height]);

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
                {mainContent}
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
                        {isVisible && (
                            <>
                                <img 
                                    src={src} 
                                    alt={alt} 
                                    className='popup-image'
                                    loading="lazy"
                                    decoding="async"
                                />
                                <CaptionText 
                                    text={caption} 
                                    dateText={date} 
                                    location={location}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

// Wrap in memo with a custom comparison function
export default React.memo(ImageTemplate, (prevProps, nextProps) => {
    return prevProps.src === nextProps.src && 
           prevProps.gridArea === nextProps.gridArea;
});
