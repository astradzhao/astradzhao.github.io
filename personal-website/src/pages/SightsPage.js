import React from 'react';
import './SightsPage.css';
import ImageTemplate from '../components/ImageTemplate';

function SightsPage() {
    return (
      <div className= 'page-wrapper'>
        <div className='image-page-container'>
            <div className='image-column'>
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/hawaii_south.png`}
                    caption="Big Island, Hawaii - The Southernmost Tip of the United States"
                    date="May 22, 2024"
                    height="20vmax"
                />
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/hawaii_volcano.png`}
                    caption="Big Island, Hawaii - Volcanic Crater"
                    date="May 21, 2024"
                    height="20vmax"
                />
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/sokcho_dock.png`}
                    caption="Sokcho (속초), South Korea - Dock View"
                    date="October 1, 2023"
                    height="20vmax"
                />
            </div>
            <div className='image-column'>
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/busan_fisherman.png`}
                    caption="Busan (부산), South Korea - Fisherman"
                    date="November 3, 2023"
                    height="20vmax"
                />
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/tokyo_red_alley.png`}
                    caption="Tokyo, Japan - Red Alley"
                    date="December 20, 2023"
                    height="41.5vmax"
                    zoom="1.5"
                    y="-55%"
                />
            </div>
            <div className='image-column'>
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/hawaii_sunset.png`}
                    caption="Big Island, Hawaii - Sunset"
                    date="May 22, 2024"
                    height="30vmax"
                    x="-25%"
                    zoom="1.5"
                />
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/sokcho_bridge.png`}
                    caption="Sokcho (속초), South Korea - Red Bridge"
                    date="October 1, 2023"
                    height="31.5vmax"
                    x="-50%"
                />
                {/* Add more ImageTemplate components as needed */}
            </div>
            <div className='image-column'>
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/seoraksan_park.png`}
                    caption="Seoraksan National Park, South Korea"
                    date="October 2, 2023"
                    height="41.5vmax"
                    x="-62%"
                />
                <ImageTemplate
                    src={`${process.env.PUBLIC_URL}/files/images/tokyo_street1.png`}
                    caption="Tokyo, Japan - City Life"
                    date="December 20, 2023"
                    height="20vmax"
                />
            </div>
        </div>
      </div>
    );
}

export default SightsPage;
