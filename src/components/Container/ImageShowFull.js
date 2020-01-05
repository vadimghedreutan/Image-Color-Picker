import React from 'react';

const ImageShowFull = ({ imageUrl }) => {
  return (
    <React.Fragment>
        <img src={imageUrl} alt='' />
    </React.Fragment>
  )
}

export default  ImageShowFull;