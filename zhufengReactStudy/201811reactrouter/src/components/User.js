import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'
class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li>
              <Link to="/user/list">User List</Link>
            </li>
            <li>
              <Link to="/user/add">Add User</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-10">
          <Route path="/user/list" component={UserList} />
          <Route path="/user/add" component={UserAdd} />
          <Route path="/user/detail/:id" component={UserDetail} />
        </div>
      </div>
    )
  }
}

export default User
