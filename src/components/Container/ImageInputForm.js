import React from 'react';

const ImageInputForm = ({ onInputChange }) => {
  return (
    <React.Fragment>
    
      <input onChange = {onInputChange} className="form-style" type="text" placeholder="http://vadimghedreutan.io/image.jpg"  />

    </React.Fragment>
  )
}

export default ImageInputForm;