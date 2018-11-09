// import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
let counter = (state = 0, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case 'ADD':
      return (state = state + 1)
    case 'SUB':
      return (state = state - 1)
    default:
      return state
  }
}
let logger1 = store => next => action => {
  console.log('before logger1', store.getState())
  next(action)
  console.log('after logger1', store.getState())
}
let logger2 = store => next => action => {
  console.log('before logger2', store.getState())
  next(action)
  console.log('after logger2', store.getState())
}

// let logger = function (store) {
//   return function (next) { next =dispatch
//     return function(action) {

//     }
//   }
// }

//redux-thunk
let thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(next)
  }
  return next(action)
}

let isPromise = obj => obj.then
let promise = store => next => action => {
  if (isPromise(action)) {
    return action.then(data => next(data))
  }
  next(action)
}

// let store = createStore(reducer)

// redux-middleware
// let store = applyMiddleware(logger)(createStore)(counter)

// redux-thunk
//如果放入多个中间件的话，需要从左向右依次执行
// let store = applyMiddleware(logger1, logger2)(createStore)(counter)
let store = applyMiddleware(promise, thunk)(createStore)(counter)

store.subscribe(() => {
  console.log(store.getState())
})

//redux-promise
store.dispatch(
  new Promise((resolved, rejected) => {
    setTimeout(function() {
      resolved({ type: 'SUB' })
    }, 3000)
  })
)
// redux-thunk
store.dispatch(dispatch => {
  setTimeout(function() {
    dispatch({ type: 'ADD' })
  }, 3000)
})

// store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD' })
