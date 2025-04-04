import React, { useState, useRef, useEffect } from 'react';
import './ImageTemplate.css';
import CaptionText from './CaptionText';

// A simple LazyImage component using Intersection Observer
function LazyImage({ src, alt, className, style }) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  // Render an empty src until the image is in view
  return (
    <img
      ref={imgRef}
      src={isInView ? src : ''}
      alt={alt}
      className={className}
      style={style}
      // fallback to browser's native lazy loading (optional)
      loading="lazy"
    />
  );
}

function ImageTemplate({ 
    src,         // Full resolution image for the popup
    thumbSrc,    // Low resolution image for the initial grid view
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

    const handleImageClick = () => {
        // Only load the full-res image when the user clicks.
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
                    {/* Use the LazyImage component for lazy loading the thumbnail */}
                    <LazyImage
                        src={thumbSrc ? thumbSrc : src}
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
                <>
                    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
                        <div className={`popup-content ${isVisible ? 'visible' : ''}`} onClick={(e) => e.stopPropagation()}>
                            {/* Full resolution image loaded only after click */}
                            <button className={`close-button ${isVisible ? 'visible' : ''}`} onClick={handleClosePopup}>
                                close
                            </button>
                            <img src={src} alt={alt} className='popup-image' />
                            <CaptionText text={caption} dateText={date} location={location}/>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ImageTemplate;
