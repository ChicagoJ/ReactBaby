import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
class UserAdd extends Component {
  constructor(props) {
    super()
    this.state = {
      blocking: false
    }
  }
  handleSubmit = () => {
    let name = this.name.value
    // get the userlist from locastorage : 1. null 2. string
    let userStr = localStorage.getItem('users')
    // transform to object user array转成对象数组
    let users = userStr ? JSON.parse(userStr) : []
    // 向此数组中加入新的对象
    users.push({ id: Date.now(), name })
    //再把数组保存到缓存中
    localStorage.setItem('users', JSON.stringify(users))
    //将跳转提示关闭
    let blocking = false
    this.setState({ blocking }, () => {
      //再通过history对象的push方法跳转到用户列表页面
      this.props.history.push('/user/list')
    })
  }
  handleChage = event => {
    let blocking = true
    this.setState({ blocking })
  }
  render() {
    return (
      <div>
        <Prompt
          when={this.state.blocking}
          message={location =>
            `Are you sure to leave the page to ${location.pathname}`
          }
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              ref={ref => (this.name = ref)}
              onChange={this.handleChage}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default UserAdd
