import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Axios from 'axios';
import App from './App';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: []
    };
  }
  componentDidMount() {
    Axios.get('/api/todoList')
      .then(res => {
        this.setState(() => ({
          todos: res.data
        }));
      })
      .catch(() => {
        alert('error');
      });
  }
  handleSubmit = () => {
    if (this.todo.value !== null && this.todo.value.length > 0) {
      // setState 返回一个函数
      this.setState(preState => ({
        todos: [...preState.todos, preState.inputValue]
      }));
    } else {
      alert('Please enter a non-empty todo');
    }
    this.todo.value = '';
  };
  handleKeyDown = event => {
    if (event.keyCode === 13 && this.todo.value.length > 0) {
      const todo = this.todo.value;
      this.setState(preState => ({ todos: [...preState.todos, todo] }));
      this.todo.value = '';
    }
  };
  handleChange = event => {
    let inputValue = event.target.value;
    this.setState({ inputValue });
  };
  handleDelete = index => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <App />
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
        <div>
          <TodoItem
            todos={this.state.todos}
            onDelete={this.handleDelete.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
