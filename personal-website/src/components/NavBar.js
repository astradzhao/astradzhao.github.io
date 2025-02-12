import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const iconStyle = {
  transition: 'transform 0.2s ease-in-out',
  display: 'inline-block',
  cursor: 'pointer',
};

const LinkedInIcon = ({ url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon" style={iconStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2vmax" height="2vmax" viewBox="0 0 32 32">
        <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
      </svg>
    </a>
);

const InstagramIcon = ({ url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon" style={iconStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2vmax" height="2vmax" viewBox="0 0 48 48">
        <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z"></path>
      </svg>
  </a>
);

const GitHubIcon = ({ url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon" style={iconStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2vmax" height="2vmax" viewBox="0 0 48 48">
        <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
      </svg>
    </a>
);



function NavBar() {
  const [hoveredLink, setHoveredLink] = useState('');

  const linkStyle = {
    paddingTop: '1.2vh',
    textDecoration: 'none',
    color: 'black',
    opacity: 0.5,
  };

  const nameStyle = {
    paddingTop: '1.2vh',
    textDecoration: 'none',
    color: 'black',
    fontSize: '2.5vmax',
    marginRight: '10vw',
    alignItems: 'flex-end',
    height: '100%',
    display: 'flex',
    transition: 'transform 0.2s ease-in-out',
    marginBottom: '-0.4vh',
  }

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink('');
  };

  const getLinkStyle = (isActive, linkName) => ({
    ...linkStyle,
    opacity: isActive || hoveredLink === linkName ? 1 : 0.4,
    fontStyle: isActive ? 'italic' : 'normal',
    transform: hoveredLink === linkName ? 'scale(1.05)' : 'scale(1)',
  });

  return (
    <div className='navbar-container'>
      <div className='navbar-links'>
        <NavLink to="/" style={nameStyle}>Daniel Zhao</NavLink>
        {['me', 'scripts', 'sights', 'sounds'].map((linkName) => (
          <NavLink 
            to={`/${linkName}`} 
            style={({ isActive }) => getLinkStyle(isActive, linkName)}
            onMouseEnter={() => handleMouseEnter(linkName)} 
            onMouseLeave={handleMouseLeave}
          >
            {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
          </NavLink>
        ))}
      </div>
      <div style={{ marginRight: '0', marginLeft: '15vw', marginTop: '2.5vh', marginBottom: '-0.5vh', position: 'relative', textAlign: 'right' }}>
        <div style={{ display: 'inline-block', margin: '0 0.25vw' }}>
            <LinkedInIcon url={'https://www.linkedin.com/in/danzhao02/'} />
        </div>
        <div style={{ display: 'inline-block', margin: '0 0.25vw' }}>
            <InstagramIcon url={'https://www.instagram.com/astradphotos/'} />
        </div>
        <div style={{ display: 'inline-block', margin: '0 0.25vw' }}>
            <GitHubIcon url={'https://github.com/astradzhao'} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;