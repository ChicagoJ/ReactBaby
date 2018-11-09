let createStore = reducer => {
  let state
  let getState = () => state
  let listeners = []
  let subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners.filter(l => l !== listener)
    }
  }
  let dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(l => l())
  }
  dispatch()
  return {
    getState,
    subscribe,
    dispatch
  }
}
//应用中间件
let applyMiddleware = middleware => createStore => reducer => {
  let store = createStore(reducer)
  middleware = middleware(store)
  let dispatch = middleware(store.dispatch)
  return {
    ...store,
    dispatch
  }
}
export { createStore, applyMiddleware }
