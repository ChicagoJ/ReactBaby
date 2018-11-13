import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  INIT_LIST_ACTION
} from './actionTypes';

const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});
const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});
const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

export {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction,
  initListAction
};
