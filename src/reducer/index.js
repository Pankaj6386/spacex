import changeTheNumber from './upDown';
import todoReducer from './ToDoList';
import ListName from './ListName';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeTheNumber,
  todoReducer,
  ListName
  // add other reducer
});

export default rootReducer;
