import React from 'react';
import './Pages.css';
import './AboutMePage.css';

function AboutMePage() {
  return (
    <div className='page-container'>
      <p className='page-text'>I'm currently a MS CS student at UCSD, with a focus in ML Sys, alternative NLP, and increasing global access to AI.</p>
      <p className='page-text'>I am also currently a TA for the Winter 2025 offering of <a href="https://hao-ai-lab.github.io/cse234-w25/" target="_blank" rel="noopener noreferrer" className="resume-link">CSE 234: Data Systems for ML</a> under Professor <a href="https://cseweb.ucsd.edu/~haozhang/" target="_blank" rel="noopener noreferrer" className="resume-link">Hao Zhang</a>.</p>
      <p className='page-text'>In the upcoming summer (2025), I will be interning at Qualcomm, where I will be working on the development of a multimodal QA system.</p>
      <p className='page-text2'>In spring 2024, I graduated from UC Berkeley with two B.As, one in Computer Science and one in Applied Math. Gob ears!</p>
      <p className='page-text2'>Before my interest in research, I worked as a software engineer intern at Accretional, Hinge Health, and Cisco Meraki. I was a longtime tutor for a Bay Area-based CS tutoring startup called Breakout Mentors.</p>
      <p className='page-text2'>
      For more information on me, please reference my resume&nbsp;
      <a href={`${process.env.PUBLIC_URL}/files/pdfs/daniel_zhao_resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume-link">
          here
      </a>.
      </p>
    </div>
  );
}

export default AboutMePage;

  