const initialState = [];

const ADD = 'Add by clicking "Add button" to add new todo card.';
const CHANGE = 'Switch done key to true/false';
const DELETE = 'Delete card';

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
// 인풋 초기화 함수
const resetInput = () => {
  document.getElementById('todo').value = '';
  document.getElementById('time').value = '';
};

export const actionCreator = (e, fn, todoValue, timeValue, ID) => {
  if (e.target.id === 'add-button') {
    fn({ type: ADD, todo: todoValue, time: timeValue });
  } else if (
    e.target.classList.contains('in-progress-card-icon-check') ||
    e.target.classList.contains('done-card-icon-back')
  ) {
    fn({ type: CHANGE, id: ID });
  } else if (
    e.target.classList.contains('in-progress-card-icon-delete') ||
    e.target.classList.contains('done-card-icon-delete')
  ) {
    fn({ type: DELETE, id: ID });
  }
};
//
// actionCreator(e, dispatch, card.todo, card.time, card.id)
function InProgressCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case ADD:
      const todoInput = document.getElementById('todo');
      const timeInput = document.getElementById('time');
      if (todoInput.value === '') {
        alert('Please type your to do.');
        todoInput.focus();
        return state;
      } else if (timeInput.value === '') {
        alert('Please set the time.');
        timeInput.focus();
        return state;
      }
      const [time, id] = getCurrentTime();
      const copiedStateToAdd = structuredClone(state);
      const result = [
        ...copiedStateToAdd,
        {
          id: id,
          todo: action.todo,
          time: action.time,
          'wrote time': time,
          done: false,
        },
      ];
      resetInput();
      return result;
    //
    case CHANGE:
      const copiedStateToDone = structuredClone(state);
      const targetIndexToDone = copiedStateToDone.findIndex(
        (card) => card.id === action.id
      );
      copiedStateToDone[targetIndexToDone].done =
        !copiedStateToDone[targetIndexToDone].done;
      return copiedStateToDone;
    //
    case DELETE:
      const copiedStateToDelete = structuredClone(state);
      const copiedStateAfterFilter = copiedStateToDelete.filter(
        (card) => card.id !== action.id
      );

      return copiedStateAfterFilter;
  }
}

export default InProgressCards;
