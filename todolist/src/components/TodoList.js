import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleButtonClick}>Submit</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                this.props.handleItemDelete(index)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//store.dispatch
const mapDispathToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = { type: 'change_input_value', value: e.target.value }
      dispatch(action)
    },
    handleButtonClick() {
      const action = { type: 'add_todo_item' }
      dispatch(action)
    },
    handleItemDelete(index) {
      const action = { type: 'delete_todo_item', index }
      dispatch(action)
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispathToProps
)(TodoList)
