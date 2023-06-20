import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { actionCreator } from 'redux/modules/In Progress Cards';

function ContentMiddle() {
  const dispatch = useDispatch();
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
                id="in-progress-card-icon-delete"
                className="in-progress-card-icon-delete"
                src="img/delete.png"
                alt="delete card"
                onClick={(e) =>
                  actionCreator(e, dispatch, card.todo, card.time, card.id)
                }
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
