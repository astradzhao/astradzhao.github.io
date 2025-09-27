import React from 'react';
import './Pages.css';
import './AboutMePage.css';

function AboutMePage() {
  return (
    <div className='page-container'>
      <p className='page-text2'>I'm currently a MS CS student at UCSD, with a research focus in NLP, multimodal LLMs, and ML systems. (But I'm also open to other topics!)</p>
      <p className='page-text2'>I'm also currently a TA (Fall 2025) for <a href="https://cseweb.ucsd.edu/classes/fa25/cse258-a/" target="_blank" rel="noopener noreferrer" className="resume-link">CSE 158/258: Web Mining and Recommender Systems</a> under Professor <a href="https://cseweb.ucsd.edu/~jmcauley/" target="_blank" rel="noopener noreferrer" className="resume-link">Julian McAuley</a>.</p>
      <br></br>
      <p className='page-text3'>In summer 2025, I was an MLE intern at Qualcomm, where I worked on the development of a low-resource multimodal RAG QA system through Langchain. It was deployed using CLIP (through ONNX-runtime) as embedder and Qwen2VL-2B (Llama.cpp backend) as the generator, on a Qualcomm-native Adreno GPU device.</p>
      <p className='page-text3'>In spring 2025, I was a TA for <a href="https://cseweb.ucsd.edu/classes/sp25/cse253-a/" target="_blank" rel="noopener noreferrer" className="resume-link">CSE 153/253: Machine Learning for Music</a> under Professor <a href="https://cseweb.ucsd.edu/~jmcauley/" target="_blank" rel="noopener noreferrer" className="resume-link">Julian McAuley</a>.</p>
      <p className='page-text3'>In winter 2025, I was a TA for <a href="https://hao-ai-lab.github.io/cse234-w25/" target="_blank" rel="noopener noreferrer" className="resume-link">CSE 234: Data Systems for ML</a> under Professor <a href="https://cseweb.ucsd.edu/~haozhang/" target="_blank" rel="noopener noreferrer" className="resume-link">Hao Zhang</a> at UCSD.</p>
      <br></br>
      <p className='page-text3'>In spring 2024, I graduated from UC Berkeley with two B.As, one in Computer Science and one in Applied Math. Gob ears 🧸!</p>
      <p className='page-text3'>Before my interest in research, I worked as a software engineer intern at Accretional, Hinge Health, and Cisco Meraki. I was a longtime tutor for a Bay Area-based CS tutoring startup called Breakout Mentors.</p>
      <p className='page-text3'>In my free time, I like playing the cello, cafe-hopping, golfing, DJing, and playing poker.</p>
      <br></br>
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

  