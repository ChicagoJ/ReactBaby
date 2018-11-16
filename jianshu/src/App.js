import React, { Component } from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { GlobleStyleFont } from './static/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobleStyleFont />
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App
