import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './HomePage.css';
import '../pages/ScriptsPage.css';

function HomePage() {
    return (
      <main className='page-container'>
        <section className='home-content'>
          <img 
            src={`${process.env.PUBLIC_URL}/files/profile_pic3.jpg`}
            alt="Daniel Zhao - ML Researcher and MS CS Student at UCSD"
            className='profile-image'
            loading="eager"
          />
          <div className='text-content'>
            <h1 className='page-text'>I am currently a founding engineer at <a href="https://axilon.com/" target="_blank" rel="noopener noreferrer" className="default-link">Axilon</a>. I've dabbled in machine learning research, and I'm also a cellist & traveler.</h1>
            <p className='page-text2'>
              Learn more <Link to="/me" className="default-link">about me</Link> or check out my <Link to="/scripts" className="default-link">projects and research</Link>.
            </p>
            <br></br>
            <p className='page-text3'>You can contact me at danielzhao02@gmail.com. Here's my <a href={`${process.env.PUBLIC_URL}/files/pdfs/daniel_zhao_resume.pdf`} target="_blank" rel="noopener noreferrer" className="default-link">resume</a>.</p>
          </div>
        </section>
      </main>
    );
  }
  
  export default HomePage;