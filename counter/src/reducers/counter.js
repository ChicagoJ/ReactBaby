import { ADD, SUB } from '../actions'
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case ADD:
      return { number: state.number + (action.amount || 1) }
    case SUB:
      return { number: state.number - (action.amount || 1) }
    default:
      return state
  }
}
export default reducer
