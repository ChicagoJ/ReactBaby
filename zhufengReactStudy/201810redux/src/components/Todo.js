import React, { Component } from 'react'
import { ADD_TODO, DELETE_TODO } from '../actions'
import { store } from '../store'
class Todo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { list: ['kkk'] }
  // }
  constructor(props) {
    super(props)
    this.state = { list: store.getState().todo.list }
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ list: store.getState().todo.list })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
  handleKeyDown = event => {
    if (event.keyCode === 13 && event.target.value.length > 0) {
      // let list = this.state.list
      // list.push(event.target.value)
      // this.setState({ list })
      // event.target.value = ''
      store.dispatch(this.addTodo(event.target.value))
      event.target.value = ''
    }
  }
  handleClick = index => {
    store.dispatch({ type: DELETE_TODO, index })
  }
  addTodo = text => ({ type: ADD_TODO, text })
  deleteTodo = index => ({ type: DELETE_TODO, index })
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} />
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() => this.handleClick(index)}
                style={{ margin: '5px' }}
              >
                {' '}
                -
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todo
