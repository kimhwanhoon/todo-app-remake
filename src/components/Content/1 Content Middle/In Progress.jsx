import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { actionCreator } from 'redux/modules/In Progress Cards';
// route
import { useNavigate } from 'react-router-dom';

function ContentMiddle() {
  //
  const FetchInProgressCards = () => {
    const dispatch = useDispatch();
    const cardArray = useSelector((state) => {
      const dataFromLocal = JSON.parse(localStorage.getItem('list')) ?? [];
      // useSelector에서 가져온 data가 비어있으면, 로컬에서 가져온 데이터를 쓰기
      if (!state.InProgressCards.length) {
        state.InProgressCards = [...dataFromLocal];
      }
      return state.InProgressCards;
    });
    // route
    const navigate = useNavigate();
    // route function
    const clickToNavigate = (e, id) => {
      if (e.target.classList.contains('in-progress-card-icon-check')) {
        return;
      } else if (e.target.classList.contains('in-progress-card-icon-delete')) {
        return;
      }
      navigate(`/todo-detail/${id}`);
    };
    return cardArray
      .filter((card) => card.done === false) // done이 false인것, 즉, In Progress
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
                  className="in-progress-card-icon-check"
                  src="/img/check.png"
                  alt="mark to done"
                  onClick={(e) =>
                    actionCreator(e, dispatch, card.todo, card.time, card.id)
                  }
                />
                <img
                  id="in-progress-card-icon-delete"
                  className="in-progress-card-icon-delete"
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
  //
  //
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
  max-width: 700px;
  margin-top: 2rem;
  color: #1f2937;
  height: 400px;
`;
