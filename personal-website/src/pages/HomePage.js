import React from 'react';
import './Pages.css';
import './HomePage.css';

function HomePage() {
    return (
      <div className='page-container'>
        <div className='home-content'>
          <img 
            src={`${process.env.PUBLIC_URL}/files/profile_pic.jpg`}
            alt="Profile"
            className='profile-image'
          />
          <div className='text-content'>
            <p className='page-text'>I'm an ML researcher, a cellist, a traveler, and a student.</p>
            <p className='page-text'>Contact me at djzhao@ucsd.edu or danielzhao02@gmail.com.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;