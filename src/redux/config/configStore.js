import { createStore } from 'redux';
import { combineReducers } from 'redux';
import InProgressCards from 'redux/modules/In Progress Cards';
import DoneCards from 'redux/modules/Done Cards';

const rootReducer = combineReducers({
  // reducer 들을 여기에 적는다.
  InProgressCards,
  DoneCards,
});
const store = createStore(rootReducer);

export default store;
