import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'> //margin top
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/> // auto: automatically adjusted based on the width
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> // we want to return an object {{}}. This will display the facedetecting box
      </div> // the above class will move the face box by detecting where the face is in the img
    </div>
  );
}

export default FaceRecognition;