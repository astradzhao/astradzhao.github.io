import React from 'react';
import './Pages.css';
import './ScriptsPage.css';

function ScriptsPage() {
    return (
      <div className='page-container'>
        <p className='page-header'>MusicGen Consistency LLM</p>
        <p className='page-text2'>Recently, I have been working on an implementation for MusicGen in conjunction with the CLLM Jacobi-generating
          architecture, with the help of <a href="https://zacharynovack.github.io/" target="_blank" rel="noopener noreferrer" className="resume-link">Zachary Novack</a>.
          Our goal is to make music-based LLM inference time a lot quicker, aiming for the seamless streaming of AI-generated music.
        </p>

        <p className='page-header'>Consistency LLMs with Hao AI Lab</p>
        <p className='page-text2'>I worked a bit with <a href="https://snyhlxde1.github.io/" target="_blank" rel="noopener noreferrer" className="resume-link">Lanxiang Hu</a> and 
        the Hao AI Lab at UCSD on the implementation of Consistency Large Language models (
        <a href="https://github.com/hao-ai-lab/Consistency_LLM" target="_blank" rel="noopener noreferrer" className="resume-link">CLLMs</a>
        ), specifically in regards to optimizing its fine-tuning and testing its compatability with qLoRA.
        </p>

        <p className='page-header'>Convolutional Neural Network</p>
        <p className='page-text2'>A brief CNN project that I fully self-implemented a class at UC Berkeley can be found <a href="https://github.com/astradzhao/CNN" target="_blank" rel="noopener noreferrer" className="resume-link">here</a>.
        </p>

        <p className='page-header'>xv6-riscv OS</p>
        <p className='page-text2'>I implemented a basic version of an <a href="https://github.com/astradzhao/xv6-os" target="_blank" rel="noopener noreferrer" className="resume-link">xv6-riscv</a> operating system for a Yonsei University class.
        </p>

        <p className='page-header'>Bear's Bobaria</p>
        <p className='page-text2'>Just for fun! I made a small little point-and-click time management game called 
        <a href="https://github.com/astradzhao/bobaShopv2" target="_blank" rel="noopener noreferrer" className="resume-link"> Bear's Bobaria </a> 
        in Unity, akin to Papa's Pizzeria, with a group of others a few years ago.
        </p>
      </div>
    );
  }
  
  export default ScriptsPage;