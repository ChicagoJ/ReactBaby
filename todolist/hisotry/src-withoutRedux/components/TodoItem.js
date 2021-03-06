import React, { Component } from 'react';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.todos !== this.props.todos) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => this.props.onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoItem;
