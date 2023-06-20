import React from 'react';

const initialState = [];

// reducer는 state와 action 2가지의 인자를 받는다.
// 마찬가지로 action은 dispatch 함수 안에 있는 객체이다.
// 그리고 보통 type과 payload의 key를 갖는다.
// 단순 등록, 단순 제거
// done으로 이동, done에서 복귀
const SIMPLE_ADD =
  'Simple add, add from Content Top "Add button" to add new todo card.';
const SIMPLE_DELETE = 'Simple delete from "In Progress Card"';
// 시간 등록 및 UUID 배출 함수
const getCurrentTime = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const filteredMonth = String(month).length === 1 ? '0' + month : month;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const filteredMinute = String(minute).length === 1 ? '0' + minute : minute;
  const CURRENT_TIME = `${year}.${filteredMonth}.${day} ${hour}:${filteredMinute}`;
  const UNIQUE_ID = new Date().getTime();
  return [CURRENT_TIME, UNIQUE_ID];
};

export const actionCreator = (e, fn, todoValue, timeValue) => {
  if (
    e.target.id === 'add-button' ||
    e.target.classList.contains('done-card-icon-back')
  ) {
    fn({ type: SIMPLE_ADD, todo: todoValue, time: timeValue });
  } else if (
    e.target.classList.contains('in-progress-card-icon-delete') ||
    e.target.classList.contains('in-progress-card-icon-check')
  ) {
    fn({ type: SIMPLE_DELETE });
  }
};
function InProgressCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SIMPLE_ADD:
      console.log('SIMPLE_ADD activated');
      const [time, id] = getCurrentTime();
      const copiedState = structuredClone(state);
      const result = [
        ...copiedState,
        {
          id: id,
          todo: action.todo,
          time: action.time,
          'wrote time': time,
        },
      ];
      console.log(result);
      return result;
    case SIMPLE_DELETE:
      console.log('SIMPLE_DELETE');
  }
}

export default InProgressCards;
