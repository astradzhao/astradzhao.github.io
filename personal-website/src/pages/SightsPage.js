import React from 'react';
import './SightsPage.css';
import ImageTemplate from '../components/ImageTemplate';

function SightsPage() {
    return (
      <div className='page-wrapper'>
        <div className='image-page-container'>
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/hawaii_south.png`}
                caption="The Southernmost Tip of the United States"
                date="May 22, 2024"
                location="Big Island, Hawaii"
                height="16vmax"
                gridArea="1 / 1 / 2 / 3"
                zoom="2"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/hawaii_sunset.png`}
                caption="Sunset"
                date="May 22, 2024"
                location="Big Island, Hawaii"
                height="25.5vmax"
                x="-25%"
                zoom="1.5"
                gridArea="1 / 3 / 3 / 4"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/busan_fisherman.png`}
                caption="Fisherman"
                date="November 3, 2023"
                location="Busan (부산), South Korea"
                height="16vmax"
                gridArea="3 / 4 / 4 / 5"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/tokyo_red_alley.png`}
                caption="Red Alley"
                date="December 20, 2023"
                location="Tokyo, Japan"
                height="33.5vmax"
                zoom="1.5"
                y="-55%"
                gridArea="2 / 1 / 4 / 2"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/sokcho_bridge.png`}
                caption="Red Bridge"
                date="October 1, 2023"
                location="Sokcho (속초), South Korea"
                height="24vmax"
                x="-50%"
                translateY='9.5vmax'
                gridArea="2 / 3 / 4 / 4"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/seoraksan_park.png`}
                caption="Jagged Peaks"
                date="October 2, 2023"
                location="Seoraksan National Park, South Korea"
                height="33.5vmax"
                x="-62%"
                y="-60%"
                zoom="1.3"
                gridArea="1 / 4 / 4 / 5"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/shanghai_cat.png`}
                caption="White Kitten"
                date="September 22, 2024"
                location="Shanghai (上海), China"
                zoom="1.6"
                height="16vmax"
                gridArea="3 / 2 / 4 / 3"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/muir_bridge.png`}
                caption="Forest Bridge"
                date="July 28, 2024"
                location="Muir Woods National Monument, California"
                height="16vmax"
                zoom="1.6"
                y="-65%"
                gridArea="4 / 3 / 5 / 5"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/muir_trees.png`}
                caption="Mist in the Woods"
                date="July 28, 2024"
                location="Muir Woods National Monument, California"
                height="16vmax"
                gridArea="2 / 2 / 3 / 3"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/sf_airbnb.png`}
                caption="Apartment View"
                date="August 26, 2024"
                location="San Francisco, California"
                height="16vmax"
                zoom="1.6"
                y="-65%"
                x="-45%"
                gridArea="4 / 1 / 5 / 3"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/hawaii_volcano.png`}
                caption="Volcanic Crater"
                date="May 21, 2024"
                location="Big Island, Hawaii"
                height="16vmax"
                gridArea="5 / 1 / 6 / 2"
                y="-45%"
                zoom="1.6"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/sd_beach.png`}
                caption="Lifeguard 30"
                date="September 5, 2024"
                location="La Jolla Shores, San Diego, California"
                height="16vmax"
                gridArea="5 / 2 / 6 / 4"
                zoom="1.6"
                x="-60%"
                y="-65%"
            />
            <ImageTemplate
                src={`${process.env.PUBLIC_URL}/files/images/hangzhou_boat.png`}
                caption="西湖小船 (West Lake Boat)"
                date="September 21, 2024"
                location="West Lake (西湖), Hangzhou (杭州), China"
                height="16vmax"
                gridArea="5 / 4 / 6 / 5"
                zoom="1.2"
                y="-55%"
                x="-60%"
            />
        </div>
      </div>
    );
}

export default SightsPage;