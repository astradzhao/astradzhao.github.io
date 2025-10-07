import React from 'react';
import './Pages.css';
import './HomePage.css';
import '../pages/ScriptsPage.css';

function HomePage() {
    return (
      <main className='page-container'>
        <section className='home-content'>
          <img 
            src={`${process.env.PUBLIC_URL}/files/profile_pic.jpg`}
            alt="Daniel Zhao - ML Researcher and MS CS Student at UCSD"
            className='profile-image'
            loading="eager"
          />
          <div className='text-content'>
            <h1 className='page-text'>I'm an ML researcher, a cellist, a traveler, and a student.</h1>
            <br></br>
            <p className='page-text3'>Contact me at <a href="mailto:djzhao@ucsd.edu" className="default-link">djzhao@ucsd.edu</a> or <a href="mailto:danielzhao02@gmail.com" className="default-link">danielzhao02@gmail.com</a>.</p>
          </div>
        </section>
      </main>
    );
  }
  
  export default HomePage;