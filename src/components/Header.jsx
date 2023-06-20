import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderDiv>
      <h1>TO DO APP</h1>
    </HeaderDiv>
  );
}

export default Header;

//
//
//
//
//
// STYLE

const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(292deg, #141e30, #243b55);
  color: white;
  border-radius: 12px 12px 0 0;
  height: 80px;
  width: 100%;
  font-size: 1.5rem;

  h1 {
    font-size: 2.15rem;
    font-weight: bold;
  }
`;
