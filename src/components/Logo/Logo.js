import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt'; // allows you to create a hover tilt button. need to install this on terminal
import brain from './brain.png';
import './Logo.css'; // for bg color

const Logo = () => {
  return (
    <div className='ma4 mt0'> // using tachyons, and below. The max:55 is to enhance tilt effect
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/> // for img logo
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;