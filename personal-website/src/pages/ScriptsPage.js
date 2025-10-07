import React, { useState } from 'react';
import './Pages.css';
import './ScriptsPage.css';

function ScriptsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Muras: A Multimodal RAG Assessment Suite",
      type: "Research",
      date: "OCT 2025",
      description: (
        <>
          As a personal project, I have just started working on a multimodal RAG assessment suite that can be used to evaluate and benchmark the performance of multimodal RAG systems. 
          This project is heavily inspired by the text-based <a href="https://github.com/explodinggradients/ragas" target="_blank" rel="noopener noreferrer" className="default-link">ragas framework</a> and my internship work at Qualcomm, and aims to be a suite specifically used for multimodal and quantized RAG systems.
        </>
      ),
      link: "https://github.com/astradzhao/muras-lite",
      linkText: "View on GitHub"
    },
    {
      title: (
        <>
          <em>Steering AR Music Generation with RFMs</em> (ICLR 2026 submission)
        </>
      ),
      type: "Research",
      date: "SEP 2025",
      description: (
        <>
          First-author paper (ICLR 2026 pending) on guided music generation using recursive feature machines (RFMs) with <a href="https://zacharynovack.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Zachary Novack</a>, <a href="https://dmbeaglehole.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Daniel Beaglehole</a>, and <a href="https://cseweb.ucsd.edu/~tberg/" target="_blank" rel="noopener noreferrer" className="default-link">Prof. Taylor Berg-Kirkpatrick</a>! Our goal is to develop a way to guide music generation towards more interpretable outputs. 
          We hope to extend this framework to <a href="https://github.com/magenta/magenta-realtime" target="_blank" rel="noopener noreferrer" className="default-link">real-time audio generation</a> in the future. Arxiv up soon!
        </>
      ),
      link: `${process.env.PUBLIC_URL}/files/pdfs/musicrfm.pdf`,
      linkText: "View Draft PDF",
      link2: "https://musicrfm.github.io/controllable-music-rfm/",
      linkText2: "View Audio Samples"
    },
    {
      title: <em>CoT Reasoning with Sparse Autoencoder-Guided Generation</em>,
      type: "Research",
      date: "MAR 2025",
      description: "Co-first author paper on generating better chain-of-thought reasoning with clustering and sparse autoencoders!",
      link: "https://arxiv.org/abs/2510.01528",
      linkText: "View on Arxiv"
    },
    {
      title: "MancalaBot",
      type: "Academic",
      date: "MAR 2025",
      description: "For a course final project (CSE 251B: Deep Learning) at UCSD, my team implemented a Mancala bot using MCTS, AlphaZero-esque training, and a custom policy network.",
      link: "https://github.com/PlayerEugene/cse151b251b-wi25-pa5-teamteam",
      linkText: "View on GitHub"
    },
    {
      title: "Learner App",
      type: "Personal",
      date: "2024 - NOW",
      description: "I have been on & off working on an app that helps language learners improve vocabulary retention and contextual understanding through an LLM-powered interactive translation practice tool!",
      link: "https://github.com/learner-app/base-app/tree/main",
      linkText: "View on GitHub"
    },
    {
      title: "Consistency LLMs with Hao AI Lab",
      type: "Research",
      date: "JUN 2024",
      description: (
        <>
          I worked a bit with <a href="https://snyhlxde1.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Lanxiang Hu</a> and the Hao AI Lab at UCSD on the implementation of Consistency Large Language models, specifically in regards to optimizing its fine-tuning and testing its compatability with qLoRA.
        </>
      ),
      link: "https://github.com/hao-ai-lab/Consistency_LLM",
      linkText: "View on GitHub"
    },
    {
      title: "xv6-riscv OS",
      type: "Academic",
      date: "DEC 2023",
      description: "I implemented a basic version of an xv6-riscv operating system for a Yonsei University class.",
      link: "https://github.com/astradzhao/xv6-os",
      linkText: "View on GitHub"
    },
    {
      title: "Bear's Bobaria",
      type: "Personal",
      date: "DEC 2021",
      description: "Just for fun! With a group of others, I made a small little point-and-click time management game called Bear's Bobaria in Unity, akin to Papa's Pizzeria.",
      link: "https://github.com/astradzhao/bobaShopv2",
      linkText: "View on GitHub"
    }
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='page-container-scripts'>
      <div className="projects-header">
        <h2 className="projects-title">My Projects & Research</h2>
        <p className="projects-subtitle">A small collection of some of my work, research, and personal projects. Click to expand and learn more!</p>
      </div>
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-item ${expandedIndex === index ? 'expanded' : ''}`}
            data-type={project.type}
          >
            <div 
              className="project-header"
              onClick={() => handleCardClick(index)}
            >
              <div className="project-header-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
              <div className="expand-icon">
                {expandedIndex === index ? '−' : '+'}
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-description">
                {project.description}
              </div>
              <div className="project-links">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.linkText} →
                </a>
                {project.link2 && (
                  <a 
                    href={project.link2} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.linkText2} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default ScriptsPage;
