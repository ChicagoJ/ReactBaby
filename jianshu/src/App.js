import React, { Component } from 'react'
import Header from './common/header'
import { GlobleStyleFont } from './static/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <div>
        <GlobleStyleFont />
        <Header />
      </div>
    )
  }
}

export default App
