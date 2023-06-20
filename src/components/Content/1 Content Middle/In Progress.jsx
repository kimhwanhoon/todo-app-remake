import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

function ContentMiddle() {
  const inProgressCardsArray = useSelector((state) => {
    return state.InProgressCards;
  });
  const FetchInProgressCards = () => {
    return inProgressCardsArray.map((card) => {
      return (
        <div key={card.id} className="card">
          <div className="card-top">
            <h1>{card.todo}</h1>
            <div className="card-top-icons-container">
              <img
                className="in-progress-card-icon-check"
                src="img/check.png"
                alt="mark to done"
              />
              <img
                className="in-progress-card-icon-delete"
                src="img/delete.png"
                alt="delete card"
              />
            </div>
          </div>
          <div className="card-bottom">
            <p>
              Must done by <span>{card.time}</span>
            </p>
            <p>
              Wrote at: <span>{card['wrote time']}</span>
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <StyledContentMiddle>
      <div className="card-title-container">
        <h2>In Progress</h2>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-top">
            <h1>Content of todo</h1>
            <div className="card-top-icons-container">
              <img
                className="in-progress-card-icon-check"
                src="img/check.png"
                alt="mark to done"
              />
              <img
                className="in-progress-card-icon-delete"
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
        <FetchInProgressCards />
      </div>
    </StyledContentMiddle>
  );
}

export default ContentMiddle;

//
//
//
//
//
// STYLE

const StyledContentMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 500px;
  max-width: 800px;
  margin-top: 2rem;
  color: #1f2937;
  height: 400px;
`;
