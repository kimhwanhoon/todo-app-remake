const initialState = [];

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

export const actionCreator = (e, fn, todoValue, timeValue, ID) => {
  if (
    e.target.id === 'add-button' ||
    e.target.classList.contains('done-card-icon-back')
  ) {
    fn({ type: SIMPLE_ADD, todo: todoValue, time: timeValue });
  } else if (
    e.target.classList.contains('in-progress-card-icon-delete') ||
    e.target.classList.contains('in-progress-card-icon-check')
  ) {
    fn({ type: SIMPLE_DELETE, id: ID });
  }
};

function InProgressCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SIMPLE_ADD:
      const [time, id] = getCurrentTime();
      const copiedStateToAdd = structuredClone(state);
      const result = [
        ...copiedStateToAdd,
        {
          id: id,
          todo: action.todo,
          time: action.time,
          'wrote time': time,
        },
      ];
      return result;
    case SIMPLE_DELETE:
      console.log('SIMPLE_DELETE activated.');
      const copiedStateToDelete = structuredClone(state);
      const filteredState = copiedStateToDelete.filter(
        (card) => card.id !== action.id
      );
      return filteredState;
  }
}

export default InProgressCards;
