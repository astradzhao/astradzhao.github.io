import React from 'react';
import './Pages.css';
import SoundCloudTrack from '../components/SoundCloudTrack';

function SoundsPage() {
    const tracks = [
        {
            title: "Unlove (Lyle Kam) - Cover",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fastradzhao%2Funlove-lyle-kam-cover%3Fsi%3Dd44cc5a6cd4e45438475acbdc81049c7&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            title: "Boy With Luv (BTS) - Cover",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fastradzhao%2Fboy-w-luv%3Fsi%3Db408ad6fbcd246cc985f2fd6ab356d70&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            title: "Megalovania (Undertale) - Cover",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fastradzhao%2Fmegalovania%3Fsi%3D00c2308f4f05475d8796ef8687ef8498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ];

    return (
        <div className='page-container'>
            <p className='page-text3'>I've made a few cello covers and am continuing to make more! Check some out below.</p>
            {tracks.map((track, index) => (
                <SoundCloudTrack
                    key={index}
                    title={track.title}
                    embedUrl={track.embedUrl}
                />
            ))}
        </div>
    );
}

export default SoundsPage;