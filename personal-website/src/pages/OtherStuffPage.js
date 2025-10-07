import React from 'react';
import './Pages.css';
import './OtherStuffPage.css';  
import { Link } from 'react-router-dom';

function OtherStuffPage() {
    return (
        <div className='page-container'>
            <p className='page-text2'>Here are some other things I've been working & planning to work on!</p>
            <div style={{ marginBottom: '4vh' }}></div>
            <a href="https://www.youtube.com/@ai_snack_zone" 
               className='page-text2' 
               style={{ textDecoration: 'none' }}
               target="_blank"
               rel="noopener noreferrer">The AI Snack Zone</a>
            <p className='page-text3'>I do quick and easy paper reviews here - perfect for a snack break!</p>
            <div style={{ marginBottom: '4vh' }}></div>
            <Link to="/papers" className='page-text2' style={{ textDecoration: 'none' }}>Paper Review Database</Link>
            <p className='page-text3'>A database of notes for papers I've read. Warning - notes may not be comprehensive, useful or legible 😆</p>
            <div style={{ marginBottom: '4vh' }}></div>
            <a href="https://www.youtube.com/@astradJournal" 
               className='page-text2' 
               style={{ textDecoration: 'none' }}
               target="_blank"
               rel="noopener noreferrer">Astrad's Journal</a>
            <p className='page-text3'>A YouTube channel for all my travel vlogs.</p>
        </div>
    );
}
  
  export default OtherStuffPage;
