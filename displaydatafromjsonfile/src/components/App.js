import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleList: []
    }
  }
  componentDidMount() {
    axios
      .get('people.json')
      .then(response => {
        this.setState({ peopleList: response.data.People })
        console.log(Array.isArray(this.state.peopleList))
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <ul>
        {this.state.peopleList.map((people, index) => (
          <li key={index}>{people.name}</li>
        ))}
      </ul>
    )
  }
}

export default App
