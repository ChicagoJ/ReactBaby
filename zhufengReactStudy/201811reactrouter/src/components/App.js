import React from 'react'
import {
  HashRouter as Router, //容器
  Route //一条路由
} from 'react-router-dom'
import Home from './Home'
import User from './User'
import Profile from './Profile'

export default (
  <Router>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/User" component={User} />
      <Route path="/Profile" component={Profile} />
    </div>
  </Router>
)
