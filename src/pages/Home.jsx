import React from 'react';
import Header from 'components/Header';
import { styled } from 'styled-components';
import Content from 'components/Content/Content';

function Home() {
  return (
    <>
      <StyledMain>
        <StyledSection>
          <Header />
          <Content />
        </StyledSection>
      </StyledMain>
    </>
  );
}

export default Home;

//
//
//
//
//
// STYLE

const StyledMain = styled.main`
  background: var(--main_background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const StyledSection = styled.section`
  border-radius: 12px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: calc(100vh - 80px);
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  box-shadow: 0 0 50px 0px #99999988;
`;
