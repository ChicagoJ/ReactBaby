import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseEnter: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_FOCUS:
      return state.set('focused', true)
    case constants.INPUT_BLUR:
      return state.set('focused', false)
    case constants.GET_LIST_ITEM:
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseEnter', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseEnter', false)
    case constants.SWITCH_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
