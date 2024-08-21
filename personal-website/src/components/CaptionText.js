import React from 'react';
import './CaptionText.css';

function CaptionText({ text, dateText, location }) {
    const googleMapsUrl = location 
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
        : null;

    return (
        <div className="caption-container">
            <div className='caption-text'>
                {text}
            </div>
            <div className='metadata-container'>
                {location && (
                    <div className='location-text'>
                        <span className="location-text-wrapper">
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                {location}
                            </a>
                        </span>
                    </div>
                )}
                <div className='date-text'>
                    {dateText}
                </div>
            </div>
        </div>
    );
}

export default CaptionText;