const initialState = [];

const ADD = 'Add by clicking "Add button" to add new todo card.';
const CHANGE = 'Switch done key to true/false';
const DELETE = 'Delete card';
const EDIT = 'Edit card on detail page.';
// 시간 등록 및 UUID 배출 함수
const getCurrentTime = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1; // JS는 0월부터 11월까지 있다.
  const filteredMonth = String(month).length === 1 ? '0' + month : month; // 한자리 수면 앞에 0붙이기
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const filteredHour = String(hour).length === 1 ? '0' + hour : hour;
  const minute = new Date().getMinutes();
  const filteredMinute = String(minute).length === 1 ? '0' + minute : minute;
  const CURRENT_TIME = `${year}.${filteredMonth}.${day} ${filteredHour}:${filteredMinute}`;
  // ms단위의 시간은 중복되지 않고, 시간은 되돌릴 수 없다는 특징을 이용해 고유 ID 생성.
  const UNIQUE_ID = new Date().getTime();
  // 나중에 디스트럭처링을 통해 쉽게 받을 수 있도록 배열로 리턴.
  return [CURRENT_TIME, UNIQUE_ID];
};
// 인풋 초기화 함수
const resetInput = () => {
  document.getElementById('todo').value = '';
  document.getElementById('time').value = '';
};
// 로컬 저장 함수
const saveLocal = (state) => {
  const stateToSave = JSON.stringify(state);
  localStorage.setItem('list', stateToSave);
};

export const actionCreator = (e, fn, todoValue, timeValue, idValue) => {
  if (e.target.id === 'add-button') {
    fn({ type: ADD, payload: { todoValue: todoValue, timeValue: timeValue } });
  } else if (
    e.target.classList.contains('in-progress-card-icon-check') ||
    e.target.classList.contains('done-card-icon-back')
  ) {
    fn({ type: CHANGE, payload: { idValue: idValue } });
  } else if (
    e.target.classList.contains('in-progress-card-icon-delete') ||
    e.target.classList.contains('done-card-icon-delete')
  ) {
    fn({ type: DELETE, payload: { idValue: idValue } });
  } else if (e.target.id === 'edit-button') {
    fn({
      type: EDIT,
      payload: { todoValue: todoValue, timeValue: timeValue, idValue: idValue },
    });
  }
};
//
function InProgressCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    //
    case ADD: {
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
      // getCurrentTime함수의 리턴값을 디스트럭처링을 통해 쉽게 변수선언하기
      const [time, id] = getCurrentTime();
      const copiedState = structuredClone(state);
      const result = [
        ...copiedState,
        {
          id: id,
          todo: action.payload.todoValue,
          time: action.payload.timeValue,
          'wrote time': time,
          done: false,
        },
      ];
      resetInput();
      saveLocal(result);
      return result;
    }
    // Switching In Progress <-> Done
    case CHANGE: {
      const copiedState = structuredClone(state);
      const targetIndex = copiedState.findIndex(
        (card) => card.id === action.payload.idValue
      );
      // true면 false로, false면 true로 상태 변경하기
      copiedState[targetIndex].done = !copiedState[targetIndex].done;
      saveLocal(copiedState);
      return copiedState;
    }
    // 삭제하기
    case DELETE: {
      if (!confirm('Do you confirm to delete?')) {
        return state;
      }
      const copiedState = structuredClone(state);
      const result = copiedState.filter((card) => card.id !== action.id);
      saveLocal(result);
      return result;
    }
    // 수정하기
    case EDIT: {
      const todoInput = document.getElementById('detail-todo');
      const timeInput = document.getElementById('detail-time');
      const editButton = document.getElementById('edit-button');
      // readonly가 활성화 되어있으면...
      // attribute에 readonly의 attribute가 단독으로 있기에 getAttribute하면 ''를 반환한다.
      // readonly가 없다면 null을 반환한다.
      if (todoInput.getAttribute('readonly') === '') {
        if (!confirm('Do you want to edit the detail?')) {
          return state;
        } else {
          todoInput.removeAttribute('readonly');
          timeInput.removeAttribute('readonly');
          alert(
            'You can edit now. \nPlease click the "Confirm" button again to save.'
          );
          editButton.innerText = 'Confirm';
          return state;
        }
      } else {
        alert('Successfully editted!');
        editButton.innerText = 'Edit';
        todoInput.setAttribute('readonly', '');
        timeInput.setAttribute('readonly', '');
        const copiedState = structuredClone(state);
        for (let i = 0; i < copiedState.length; i++) {
          if (copiedState[i].id === action.payload.idValue) {
            copiedState[i].todo = action.payload.todoValue;
            copiedState[i].time = action.payload.timeValue;
            break;
          }
        }
        saveLocal(copiedState);
        return copiedState;
      }
    }
  }
}

export default InProgressCards;
