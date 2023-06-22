import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreator } from 'redux/modules/inProgressCards';

function Input() {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  return (
    <StyledInput>
      <div>
        <input
          id="todo"
          type="text"
          placeholder="Write your new to do."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <input
          id="time"
          type="time"
          onChange={(e) => setTimeValue(e.target.value)}
          value={timeValue}
        />
      </div>
      <button
        id="add-button"
        onClick={(e) => actionCreator(e, dispatch, todoValue, timeValue)}
      >
        Add
      </button>
    </StyledInput>
  );
}

export default Input;

//
//
//
//
//
// STYLE

const StyledInput = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 80%;
  min-width: 500px;
  max-width: 800px;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    width: 100%;
    max-width: 500px;
    min-width: 400px;

    > input {
      width: 100%;
      min-width: 200px;
      max-width: 450px;
      height: 40px;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
      transition: cubic-bezier(0, 0, 0.2, 1) 0.3s;
      border-radius: 5px;
      padding: 1px 10px;
      background-color: var(--input);
      color: var(--font_color);
    }
    > input:focus {
      outline: var(--input_outline);
      transform: scale(1.05);
    }
    > #time {
      text-align: center;
    }
  }

  button {
    width: 110px;
    background-color: var(--primary_button);
    border: none;
    border-radius: 10px;
    box-shadow: var(--primary_button_background);
    color: white;
    font-size: 1.15rem;
    font-weight: 500;
    cursor: pointer;
    transition: cubic-bezier(0, 0, 0.2, 1) 0.5s;
  }
  button:hover {
    transform: scale(1.05);
    background-color: var(--primary_button_hover);
  }
  button:active {
    transform: scale(0.98);
    transition: 0.15s;
  }
`;
