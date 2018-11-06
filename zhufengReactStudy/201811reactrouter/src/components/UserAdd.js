import React, { Component } from 'react'
class UserAdd extends Component {
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
    //再通过history对象的push方法跳转到用户列表页面
    this.props.history.push('/user/list')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            ref={ref => (this.name = ref)}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    )
  }
}

export default UserAdd
