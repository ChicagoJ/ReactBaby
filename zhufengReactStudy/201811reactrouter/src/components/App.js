import React from 'react'
import {
  BrowserRouter as Router, //容器
  Route, //一条路由
  Link
} from 'react-router-dom'
import Home from './Home'
import User from './User'
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.css'
export default (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">User Manager System</div>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/user">User Setting</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Route path="/home" component={Home} />
            <Route path="/User" component={User} />
            <Route path="/Profile" component={Profile} />
          </div>
        </div>
      </div>
    </div>
  </Router>
)
