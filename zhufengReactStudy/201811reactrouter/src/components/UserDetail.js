import React, { Component } from 'react'
class UserDetail extends Component {
  render() {
    let id = this.props.match.params.id
    // let userStr = localStorage.getItem('users')
    // let users = userStr ? JSON.parse(userStr) : []
    // get the userlist from locastorage : 1. null 2. string
    let userStr = localStorage.getItem('users')
    // transform to object user array转成对象数组
    let users = userStr ? JSON.parse(userStr) : []
    let user = users.find(user => user.id == id)

    //history 跳转路由 路径
    //match匹配结果 如果匹配上就是对象，匹配不上就是null
    //location当前路径 pathname 当前路径
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default UserDetail
