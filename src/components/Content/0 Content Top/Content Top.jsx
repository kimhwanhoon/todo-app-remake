import React from 'react';
import { styled } from 'styled-components';
import Input from './Input';

function ContentTop() {
  return (
    <StyledContentTop>
      <div>
        <h1 id="content-top-title">Add your To do</h1>
      </div>
      <Input />
    </StyledContentTop>
  );
}

export default ContentTop;

//
//
//
//
//
// STYLE

const StyledContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  #content-top-title {
    text-align: center;
    width: 300px;
    border-bottom: 3px #333 solid;
    padding-bottom: 0.4rem;
    color: #333;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;