import React from 'react';
import './Pages.css';
import './ScriptsPage.css';

function ScriptsPage() {
    return (
      <div className='page-container-scripts'>
        <p className='page-header-small'>MusicRFM</p>
        <p className='page-text3'>Recently, I have been working on guided music generation, utilizing recursive feature machines (RFMs) with <a href="https://zacharynovack.github.io/" target="_blank" rel="noopener noreferrer" className="resume-link">Zachary Novack </a>
        and <a href="https://cseweb.ucsd.edu/~tberg/" target="_blank" rel="noopener noreferrer" className="resume-link">Prof. Taylor Berg-Kirkpatrick</a>!
          Our goal is to develop a way to guide music generation towards more interpretable outputs.
        </p>

        <p className='page-header-small'>CoT Reasoning with Sparse Autoencoder-Guided Generation</p>
        <p className='page-text3'>First paper, on generating better chain-of-thought reasoning with clustering and sparse autoencoders! Draft{' '}
        <a href={`${process.env.PUBLIC_URL}/files/pdfs/sae_iclr.pdf`} target="_blank" rel="noopener noreferrer" className="resume-link">
          PDF
        </a>.
        </p>

        <p className='page-header-small'>Learner App</p>
        <p className='page-text3'>I'm currently working on an app that helps language learners improve vocabulary
           retention and contextual understanding through an LLM-powered interactive translation practice tool! No code though, it's a secret 😸!
        </p>

        <p className='page-header-small'>Consistency LLMs with Hao AI Lab</p>
        <p className='page-text3'>I worked a bit with <a href="https://snyhlxde1.github.io/" target="_blank" rel="noopener noreferrer" className="resume-link">Lanxiang Hu</a> and 
        the Hao AI Lab at UCSD on the implementation of Consistency Large Language models (
        <a href="https://github.com/hao-ai-lab/Consistency_LLM" target="_blank" rel="noopener noreferrer" className="resume-link">CLLMs</a>
        ), specifically in regards to optimizing its fine-tuning and testing its compatability with qLoRA.
        </p>

        <p className='page-header-small'>MancalaBot</p>
        <p className='page-text3'>For a course final project (CSE 251B: Deep Learning) at UCSD, my team implemented a <a href="https://github.com/PlayerEugene/cse151b251b-wi25-pa5-teamteam" target="_blank" rel="noopener noreferrer" className="resume-link">Mancala bot</a> using MCTS, AlphaZero-esque training, and a custom policy network. 
        </p>

        <p className='page-header-small'>xv6-riscv OS</p>
        <p className='page-text3'>I implemented a basic version of an <a href="https://github.com/astradzhao/xv6-os" target="_blank" rel="noopener noreferrer" className="resume-link">xv6-riscv</a> operating system for a Yonsei University class.
        </p>

        <p className='page-header-small'>Bear's Bobaria</p>
        <p className='page-text3'>Just for fun! I made a small little point-and-click time management game called 
        <a href="https://github.com/astradzhao/bobaShopv2" target="_blank" rel="noopener noreferrer" className="resume-link"> Bear's Bobaria </a> 
        in Unity, akin to Papa's Pizzeria, with a group of others a few years ago.
        </p>
      </div>
    );
  }
  
  export default ScriptsPage;
