import React, { Component } from 'react'
import Header from './components/header'
import Home from './components/home'

class App extends Component {
  constructor() {
    super()
    this.state = {
      homeLink: 'home',
      homeMounted: true
    }
  }
  onGreet(age) {
    alert(age)
  }
  getAge(age) {
    console.log(age)
    return age
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    })
  }
  onChangeHomeMount() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render() {
    const user = {
      id: 100,
      hobbies: ['coding', 'jogging']
    }

    let homeCmp = ''
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={'Max'}
          initialAge={12}
          user={user}
          greet={this.onGreet}
          getAge={this.getAge}
          changeLink={this.onChangeLinkName.bind(this)}
          initialName={this.state.homeLink}
        />
      )
    }
    return (
      <div className="container">
        <Header homeLink={this.state.homeLink} />
        {homeCmp}
        <button
          onClick={this.onChangeHomeMount.bind(this)}
          className="btn btn-primary"
        >
          (Un)mount Home Component
        </button>
      </div>
    )
  }
}

export default App
