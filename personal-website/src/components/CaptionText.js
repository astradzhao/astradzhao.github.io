import React from 'react';
import './CaptionText.css';

function CaptionText({ text, dateText }) {
    return (
        <div>
            <div className='caption-text'>
                {text}
            </div>
            <div className='date-text'>
                {dateText}
            </div>
        </div>
    );
}

export default CaptionText;