import React from 'react';
import './SoundCloudTrack.css';

function SoundCloudTrack({ title, embedUrl }) {
    return (
        <div className="track-container">
            <p className="track-title">{title}</p>
            <iframe
                title={title}
                width="100%"
                height="120"
                allow="autoplay"
                src={embedUrl}
            ></iframe>
        </div>
    );
}

export default SoundCloudTrack;