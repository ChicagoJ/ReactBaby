import React, { Component } from 'react'
class Todo extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: ['Learn React', 'Prepare Interview']
    }
  }
  handleSubmit = () => {
    if (this.todo.value !== null && this.todo.value.length > 0) {
      this.setState({ todos: [...this.state.todos, this.todo.value] })
    } else {
      alert('Please enter a non-empty todo')
    }
    this.todo.value = ''
  }
  handleKeyDown = event => {
    if (event.keyCode === 13 && this.todo.value.length > 0) {
      let todos = this.state.todos
      todos.push(this.todo.value)
      this.setState({ todos })
      this.todo.value = ''
    }
  }
  handleChange = () => {
    let inputValue = this.todo.value
    this.setState({ inputValue })
  }
  handleDelete = index => {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({ todos })
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            //   defaultValue={this.state.inputValue}
            ref={ref => (this.todo = ref)}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}{' '}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
          {/* two way binding
          <li>{this.state.inputValue}</li> */}
        </ul>
      </div>
    )
  }
}

export default Todo
