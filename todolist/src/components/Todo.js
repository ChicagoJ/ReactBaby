import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store';
import TodoUI from './TodoUI';
import {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction,
  initListAction
} from '../actionCreators';
import axios from 'axios';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  componentWillMount() {
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount() {
    axios.get('../list.json').then(res => {
      const data = res.data;
      const action = initListAction(data);
      store.dispatch(action);
    });
  }
  handleDelete = index => {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  };
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleChange = e => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };

  handleClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };
  render() {
    return (
      <TodoUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default Todo;
