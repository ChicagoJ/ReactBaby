import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from '../store'
import TodoUI from './TodoUI'
import {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction
} from '../actionCreators'
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleStoreChange = this.handleStoreChange.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }
  componentWillMount() {
    store.subscribe(this.handleStoreChange)
  }
  handleDelete = index => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  }
  handleChange = e => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  render() {
    return (
      <TodoUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDelete={this.handleDelete}
      />
    )
  }
}

export default Todo
