import React from 'react';
import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';

const Shake = styled.div`animation: 2s ${keyframes`${headShake}`} ease-out`;

const ImageClickBtn = ({ onSubmitBtn }) => {
  return (
    <Shake>
      <h1>Picker</h1>
      <hr/>
      <p>This Color Picker Image will detect colors in your pictures. Git it a try.</p>
      <button onClick = {onSubmitBtn} className="btn">Detect Color</button>
    </Shake>
  )
}

export default ImageClickBtn;