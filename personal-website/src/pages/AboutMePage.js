import React from 'react';
import './Pages.css';
import './AboutMePage.css';

function AboutMePage() {
    return (
      <div className='page-container'>
        <p style={{fontSize: '80px', marginBottom: '0px'}}>Me</p>
        <p className='page-text'>I’m set to graduate from UC Berkeley in May 2024 with two B.As, one in Computer Science and one in Applied Math.</p>
        <p className='page-text'>In the upcoming fall, I will be studying at UCSD for my MSCS, with a focus in efficient ML, LLMs, and increasing global access to AI.
</p>
        <p className='page-text'>Before my interest in research, I worked as a software engineer intern at Hinge Health and Cisco Meraki. I was a longtime tutor for a Bay Area-based CS tutoring startup called Breakout Mentors.

</p>
        <p className='page-text'>
        For more information on me, please reference my resume&nbsp;
        <a href="https://drive.google.com/file/d/1lr7cN9memr5vNLHQo0XmbHMP9cizrLfZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-link">
            here
        </a>.
        </p>
      </div>
    );
  }
  
  export default AboutMePage;
  

  