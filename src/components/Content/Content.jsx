import React from 'react';
import { styled } from 'styled-components';
import ContentTop from './0 Content Top/Content Top';
import ContentMiddle from './1 Content Middle/In Progress';
import ContentBottom from './2 Content Bottom/Done';

function Content() {
  return (
    <StyledContent>
      <ContentTop />
      <ContentMiddle />
      <ContentBottom />
    </StyledContent>
  );
}

export default Content;

//
//
//
//
//
// STYLE

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
