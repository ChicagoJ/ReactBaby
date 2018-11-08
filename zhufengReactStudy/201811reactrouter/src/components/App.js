import React from 'react'
import {
  BrowserRouter as Router, //容器
  Route, //一条路由
  Link,
  Switch
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from './Home'
import User from './User'
import Profile from './Profile'
import Login from './Login'
import MenuList from './MenuList'
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
            <MenuList label="Home" to="/Home" />
            <MenuList label="User Setting" to="/user" />
            <MenuList label="Profile" to="/profile" />
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              {/* <Route path="/" exact render={props => <div>Home 1</div>} /> */}
              <Route path="/home" component={Home} />
              <Route path="/User" component={User} />
              <Route path="/Login" component={Login} />
              <ProtectedRoute path="/Profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
)
