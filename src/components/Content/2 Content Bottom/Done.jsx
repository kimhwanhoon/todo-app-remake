import React from 'react';
import { styled } from 'styled-components';

function ContentBottom() {
  return (
    <StyledContentBottom>
      <div className="card-title-container">
        <h2>Done</h2>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-top">
            <h1>Content of todo</h1>
            <div className="card-top-icons-container">
              <img
                className="done-card-icon-back"
                src="img/back.png"
                alt="back to in progress"
              />
              <img
                className="done-card-icon-delete"
                src="img/delete.png"
                alt="delete card"
              />
            </div>
          </div>
          <div className="card-bottom">
            <p>
              Must done by <span>00:00</span>
            </p>
            <p>
              Wrote at: <span>2023.06.20 00:00</span>
            </p>
          </div>
        </div>
      </div>
    </StyledContentBottom>
  );
}

export default ContentBottom;

//
//
//
//
//
// STYLE

const StyledContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 500px;
  max-width: 800px;
  color: #1f2937;
  height: 400px;
`;
