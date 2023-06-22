import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { actionCreator } from 'redux/modules/In Progress Cards';

function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const cardArray = useSelector((state) => {
    return state.InProgressCards;
  });
  const targetCard = cardArray.filter(
    (card) => card.id === Number(param.id)
  )[0];
  const targetCardID = targetCard.id;
  const targetCardTime = targetCard.time;
  const targetCardTodo = targetCard.todo;
  const targetCardWroteTime = targetCard['wrote time'];
  animateDisplay();
  //
  const [todoValue, setTodoValue] = useState(targetCardTodo);
  const [timeValue, setTimeValue] = useState(targetCardTime);
  const dispatch = useDispatch();
  return (
    <StyledDetail id="detail-container">
      <div id="detail-header">
        <h1>Todo Detail</h1>
      </div>
      <div id="detail-content">
        <p id="detail-uuid">Todo UUID: {targetCardID}</p>
        <div id="detail-todo-container">
          <p>Todo:</p>
          <input
            id="detail-todo"
            value={todoValue}
            type="text"
            onChange={(e) => setTodoValue(e.target.value)}
            readOnly
          />
        </div>
        <div id="time-container">
          <p>Must Done by:</p>
          <input
            id="detail-time"
            type="time"
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
            readOnly
          />
        </div>
        <div id="detail-wrote-container">
          <p>Wrote at: {targetCardWroteTime}</p>
        </div>
        <div id="detail-button-container">
          <button
            id="edit-button"
            onClick={(e) =>
              actionCreator(e, dispatch, todoValue, timeValue, targetCardID)
            }
          >
            Edit
          </button>
          <button id="close-button" onClick={() => navigate(`/`)}>
            Close
          </button>
        </div>
      </div>
    </StyledDetail>
  );
}

export default Detail;

const animateDisplay = () => {
  setTimeout(() => {
    document.querySelector('header').style.height = '100vh';
    document.querySelector('header h1').innerText = '';
    document.querySelector('header').style.transition =
      'cubic-bezier(0, 0, 0.2, 1) 0.6s';
    document.querySelector('#content').style.display = 'none';
  }, 0);

  setTimeout(() => {
    document.getElementById('detail-container').style.opacity = 0;
    document.getElementById('detail-container').style.zIndex = -1;
  }, 0);

  setTimeout(() => {
    document.getElementById('detail-container').style.opacity = 1;
    document.getElementById('detail-container').style.zIndex = 1;
  }, 10);
};

const StyledDetail = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: #f8fafc;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px #c7d2fe, 0 2px 4px -2px #c7d2fe;
  transition: ease-in-out 0.3s;
  opacity: 0;
  z-index: -1;

  #detail-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(292deg, #141e30, #243b55);
    border-radius: 12px 12px 0 0;
    height: 80px;
    width: 100%;
  }

  #detail-header h1 {
    font-size: 1.75rem;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }
  #detail-uuid {
    margin-bottom: 1rem;
  }
  #detail-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  #detail-todo-container {
    width: 90%;
  }
  #detail-todo-container p {
    font-weight: 600;
    padding-bottom: 0.3rem;
    color: #333;
  }
  #detail-todo {
    box-shadow: 0 4px 6px -1px #c7d2fe, 0 2px 4px -2px #c7d2fe;
    border-radius: 4px;
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-align: center;
    border: none;
    outline: none;
    font-size: 1rem;
  }
  #time-container {
    width: 90%;
  }
  #time-container p {
    font-weight: 500;
    padding-bottom: 0.3rem;
    color: #333;
  }
  #detail-time {
    width: 100%;
    box-shadow: 0 4px 6px -1px #c7d2fe, 0 2px 4px -2px #c7d2fe;
    border-radius: 4px;
    border: none;
    height: 30px;
    text-align: center;
    outline: none;
  }
  #detail-wrote-container {
    margin-top: 1rem;
    font-size: 0.9rem;
    width: 90%;
    text-align: right;
  }
  #detail-button-container {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    gap: 2rem;
  }
  #detail-button-container button {
    width: 100%;
    height: 35px;
    box-shadow: 0 4px 6px -1px #c7d2fe, 0 2px 4px -2px #c7d2fe;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.05rem;
    letter-spacing: 0.75px;
    transition: cubic-bezier(0, 0, 0.2, 1) 0.3s;
  }
  #detail-button-container button:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
  #detail-button-container button:active {
    transform: scale(0.99);
  }

  #edit-button {
    background: rgb(0, 7, 44);
    background: linear-gradient(
      333deg,
      rgba(0, 7, 44, 1) 18%,
      rgba(0, 55, 106, 1) 88%
    );
  }

  #close-button {
    background: rgb(32, 1, 34);
    background: linear-gradient(
      300deg,
      rgba(32, 1, 34, 1) 0%,
      rgba(111, 0, 0, 1) 100%
    );
  }
`;
