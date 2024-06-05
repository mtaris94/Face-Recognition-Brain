import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'> //size f3
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'> // class present in app.css
        <div className='form center pa4 br3 shadow-5'> // for search bar, .form class in css file above, and positioned centered
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' // grow when hover over 
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;