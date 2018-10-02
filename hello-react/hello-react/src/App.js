import React, { Component } from 'react'
import Header from './components/header'
import Home from './components/home'

class App extends Component {
  render() {
    const user = {
      id: 100,
      hobbies: ['coding', 'jogging']
    }
    return (
      <div className="container">
        <Header />
        <Home name={'Max'} age={12} user={user} />
        <div className="row">
          <div className="col-sm-4 col-sm-offset-8">Hello</div>
        </div>
      </div>
    )
  }
}

export default App
