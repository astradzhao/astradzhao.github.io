import React from 'react';
import './Pages.css';
import './AboutMePage.css';

function AboutMePage() {
  return (
    <main className='page-container' role="main">
      <p className='page-text2'>I'm currently working full-time as the 3rd engineer at <a href="https://axilon.com/" target="_blank" rel="noopener noreferrer" className="default-link">Axilon</a> in NYC, where we are building an ontology (or digital twin, so to speak) and an agentic platform for all industrial operations.</p>
      <p className='page-text2'>I recently completely my MS in CS at UCSD, graduating in December 2025. My research interests include interpretable (and steerable) generation, ML for music, and how to best utilize LLMs for education.</p>
      <p className='page-text2'>In spring 2024, I graduated from UC Berkeley with two B.As, one in Computer Science and one in Applied Math. Gob ears 🧸 (forever)!</p>
      <br></br>
      <p className='page-text3'>In early 2026, I briefly worked as a contractor for <a href="https://outerproduct.com/" target="_blank" rel="noopener noreferrer" className="default-link">OuterProduct</a>, directly with my co-author <a href="https://dmbeaglehole.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Daniel Beaglehole</a> and MIT Professor <a href="https://aditradha.com/" target="_blank" rel="noopener noreferrer" className="default-link">Adit Radhakrishnan</a>. 
      I worked primarily on utilizing RFMs to steer text generation towards various applied use cases.</p>
      <p className='page-text3'>In fall 2025, I was a TA for <a href="https://cseweb.ucsd.edu/classes/fa25/cse258-a/" target="_blank" rel="noopener noreferrer" className="default-link">CSE 158/258: Web Mining and Recommender Systems</a> under Professor <a href="https://cseweb.ucsd.edu/~jmcauley/" target="_blank" rel="noopener noreferrer" className="default-link">Julian McAuley</a>.</p>
      <p className='page-text3'>In summer 2025, I was an MLE intern at Qualcomm, where I worked on the development of a low-resource multimodal RAG QA system, built on a native Qualcomm Adreno GPU device.</p>
      <p className='page-text3'>In spring 2025, I was a TA for <a href="https://cseweb.ucsd.edu/classes/sp25/cse253-a/" target="_blank" rel="noopener noreferrer" className="default-link">CSE 153/253: Machine Learning for Music</a> under Professor <a href="https://cseweb.ucsd.edu/~jmcauley/" target="_blank" rel="noopener noreferrer" className="default-link">Julian McAuley</a>.</p>
      <p className='page-text3'>In winter 2025, I was a TA for <a href="https://hao-ai-lab.github.io/cse234-w25/" target="_blank" rel="noopener noreferrer" className="default-link">CSE 234: Data Systems for ML</a> under Professor <a href="https://cseweb.ucsd.edu/~haozhang/" target="_blank" rel="noopener noreferrer" className="default-link">Hao Zhang</a>.</p>
      <p className='page-text3'>Additionally, I have worked as a software engineer intern at Accretional, Hinge Health, and Cisco Meraki. I was a longtime tutor for a Bay Area-based CS tutoring startup called Breakout Mentors.</p>
      <p className='page-text3'>In my free time, I like playing the cello, cafe-hopping, golfing, DJing, and playing poker.</p>
      <br></br>
      <p className='page-text2'>
      For more information on me, please reference my resume&nbsp;
      <a href={`${process.env.PUBLIC_URL}/files/pdfs/daniel_zhao_resume.pdf`} target="_blank" rel="noopener noreferrer" className="default-link">
          here.
      </a>
      </p>
    </main>
  );
}

export default AboutMePage;

  