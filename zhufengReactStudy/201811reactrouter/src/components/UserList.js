import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class UserList extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    // get the userlist from locastorage : 1. null 2. string
    let userStr = localStorage.getItem('users')
    // transform to object user array转成对象数组
    let users = userStr ? JSON.parse(userStr) : []
    this.setState({ users })
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.users.map((user, index) => (
          <li key={index} className="list-group-item">
            <Link to={'/user/detail/' + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserList
