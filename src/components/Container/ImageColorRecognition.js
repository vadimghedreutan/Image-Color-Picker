import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.span`animation: 2s ${keyframes`${fadeIn}`} ease-out`;

const ImageColorRecognition = ({colors}) => {
  return (
    <React.Fragment>
      {
      colors.map((colors, index) =>
      
      
      <FadeIn 
        style={{ backgroundColor: `${colors.raw_hex}`  }}
        key={index}
        className="badge">
          {colors.raw_hex}
      </FadeIn>
    
      )}


    
    </React.Fragment>
  )
}

export default ImageColorRecognition;