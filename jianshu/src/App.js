import React, { Component } from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import { GlobleStyleFont } from './static/iconfont/iconfont'
import Post from './pages/post'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <GlobleStyleFont />
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/post" exact component={Post} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
