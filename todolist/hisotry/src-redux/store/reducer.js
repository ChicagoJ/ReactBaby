import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  INIT_LIST_ACTION
} from '../actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};
export default (state = defaultState, action) => {
  // if (action.type === undefined) return state
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case ADD_TODO_ITEM:
      if (newState.inputValue !== null && newState.inputValue.length > 0) {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
      } else {
        alert('input value cannot be null');
        return state;
      }
    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case INIT_LIST_ACTION:
      newState.list = action.data;
      return newState;
    default:
      return state;
  }
};
