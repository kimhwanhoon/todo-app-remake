import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { actionCreator } from 'redux/modules/inProgressCards';

function Detail() {
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const cardArray = useSelector((state) => {
    return state.InProgressCards;
  });
  const targetCard = cardArray.filter(
    (card) => card.id === Number(param.id)
  )[0];
  //
  animateDisplay();
  const [todoValue, setTodoValue] = useState(targetCard.todo);
  const [timeValue, setTimeValue] = useState(targetCard.time);

  // ESC 누르면 뒤로가기

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navigate(`/`);
    }
  });

  return (
    <StyledDetail id="detail-container">
      <div id="detail-header">
        <h1>Todo Detail</h1>
      </div>
      <div id="detail-content">
        <p id="detail-uuid">Todo UUID: {targetCard.id}</p>
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
          <p>Wrote at: {targetCard['wrote time']}</p>
        </div>
        <div id="detail-button-container">
          <button
            id="edit-button"
            onClick={(e) =>
              actionCreator(e, dispatch, todoValue, timeValue, targetCard.id)
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
  background-color: var(--content_background);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-shadow: var(--detail_box_shadow);
  transition: ease-in-out 0.3s;
  opacity: 0;
  z-index: -1;

  #detail-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--detail_header);
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
    background-color: var(--content_background);
  }
  #detail-todo-container {
    width: 90%;
  }
  #detail-todo-container p {
    font-weight: 600;
    padding-bottom: 0.3rem;
    color: var(--font_color);
  }
  input {
    box-shadow: var(--detail_box_shadow);
  }
  #detail-todo {
    border-radius: 4px;
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-align: center;
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--font_color);
    background-color: var(--input);
  }
  #time-container {
    width: 90%;
  }
  #time-container p {
    font-weight: 500;
    padding-bottom: 0.3rem;
    color: var(--font_color);
  }
  #detail-time {
    width: 100%;
    border-radius: 4px;
    border: none;
    height: 30px;
    text-align: center;
    outline: none;
    color: var(--font_color);
    background-color: var(--input);
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
    box-shadow: var(--detail_box_shadow);
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
    background: var(--edit_button);
  }

  #close-button {
    background: var(--close_button);
  }
  p {
    color: var(--font_color);
  }
`;
