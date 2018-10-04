import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  constructor() {
    super()
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleReset = this.handleReset.bind(this)
    console.log('App - contructed')
  }

  componentWillMount() {
    console.log('App - will mount')
  }

  componentDidMount() {
    console.log('App - Mounted')
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }
  handleDelete(id) {
    const counters = this.state.counters.filter(c => c.id !== id)
    this.setState({ counters })
  }
  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }
  render() {
    console.log('App - rendered')

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main role="main" className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
