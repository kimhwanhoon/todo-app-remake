import React from 'react';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from 'redux/modules/In Progress Cards';
// route
import { useNavigate } from 'react-router-dom';

function ContentBottom() {
  const dispatch = useDispatch();
  const DoneCardsArray = useSelector((state) => {
    return state.InProgressCards;
  });
  const FetchDoneCards = () => {
    // route
    const navigate = useNavigate();
    // route function
    const clickToNavigate = (e, id) => {
      if (e.target.classList.contains('done-card-icon-back')) {
        return;
      } else if (e.target.classList.contains('done-card-icon-delete')) {
        return;
      }
      navigate(`/todo-detail/${id}`);
    };
    return DoneCardsArray.filter((card) => card.done === true) // done이 false인것, 즉, In Progress
      .map((card) => {
        return (
          <div
            key={card.id}
            className="card"
            onClick={(e) => clickToNavigate(e, card.id)}
          >
            <div className="card-top">
              <h1>{card.todo}</h1>
              <div className="card-top-icons-container">
                <img
                  className="done-card-icon-back"
                  src="/img/back.png"
                  alt="back to in progress"
                  onClick={(e) =>
                    actionCreator(e, dispatch, card.todo, card.time, card.id)
                  }
                />
                <img
                  id="card-icon-delete"
                  className="done-card-icon-delete"
                  src="/img/delete.png"
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
    <StyledContentBottom>
      <div className="card-title-container">
        <h2>Done</h2>
      </div>
      <div className="cards-container">
        <FetchDoneCards />
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
  max-width: 700px;
  color: #1f2937;
  height: 400px;
  padding-bottom: 2rem;
`;
