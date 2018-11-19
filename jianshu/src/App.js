import React, { Component } from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import { GlobleStyleFont } from './static/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobleStyleFont />
          <Header />
          <Router>
            <div>
              <Route path="/home" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
