import React from 'react';
import './Pages.css';
import './AboutMePage.css';

function AboutMePage() {
  return (
    <div className='page-container'>
      <p className='page-text'>I'm a recent graduate from UC Berkeley with two B.As, one in Computer Science and one in Applied Math.</p>
      <p className='page-text'>In the upcoming fall, I plan to study at UCSD for my MSCS, with a focus in efficient ML, LLMs, and increasing global access to AI.</p>
      <p className='page-text'>Before my interest in research, I worked as a software engineer intern at Hinge Health and Cisco Meraki. I was a longtime tutor for a Bay Area-based CS tutoring startup called Breakout Mentors.</p>
      <p className='page-text'>I currently intern for an early-stage startup called Accretional, where we aim to lower the barrier of entry to cloud-computing by utilizing AI.</p>
      <p className='page-text'>
      For more information on me, please reference my resume&nbsp;
      <a href={`${process.env.PUBLIC_URL}/files/pdfs/daniel_zhao_resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume-link">
          here
      </a>.
      </p>
    </div>
  );
}

export default AboutMePage;

  