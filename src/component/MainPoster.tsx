import React from 'react';
import styled from 'styled-components';
import poster from '../assets/poster.jpeg';

const Poster = styled.div`
  width: 100vw;
  height: 500vh;
  background-image: url(${poster});
  background-repeat: no-repeat;
  background-size: contain;
`;

function MainPoster() {
  return <Poster />;
}

export default MainPoster;
