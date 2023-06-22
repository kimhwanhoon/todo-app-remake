import { createStore } from 'redux';
import { combineReducers } from 'redux';
import InProgressCards from 'redux/modules/inProgressCards';

const rootReducer = combineReducers({
  // reducer 들을 여기에 적는다.
  InProgressCards,
});
const store = createStore(rootReducer);

export default store;
