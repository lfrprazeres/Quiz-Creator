import React from 'react';
import Routes from './routes';
import styled from 'styled-components';
import waveSvg from './assets/wave.svg';

// creating the wave in the background
const AppStyled = styled.main`
  background-image: url(${waveSvg});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`

function App() {
  return (
    <AppStyled>
      <Routes />
    </AppStyled>
  );
}

export default App;
