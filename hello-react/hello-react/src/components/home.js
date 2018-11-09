import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: this.props.initialAge,
      status: 0,
      homeLink: props.initialName
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
  }
  onMakeOlder() {
    this.setState({ age: this.state.age + 3 })
    console.log(this)
  }
  handleGreet() {
    this.props.greet(this.state.age)
  }
  hangeGetAge() {
    this.props.getAge(this.state.age)
  }
  handleChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  componentWillMount() {
    console.log('component will mount')
  }
  componentDidMount() {
    console.log('component did mount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('component will recieve next props', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('component should update', nextProps, nextState)
    // if (nextState.status === 1) return false
    return true
  }
  componentWillUpdate() {
    console.log('component will update')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update', prevProps, prevState)
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-8">
          <div>
            This is {this.props.name} and I am {this.state.age} years old
            <div>Status: {this.state.status}</div>
            <button
              onClick={() => {
                this.onMakeOlder()
              }}
              className="btn btn-primary"
            >
              Make me older
            </button>
            <hr />
            <button
              onClick={this.handleGreet.bind(this)}
              className="btn btn-danger"
            >
              Greet
            </button>
            <hr />
            <button
              onClick={this.hangeGetAge.bind(this)}
              className="btn btn-success"
            >
              Print Age
            </button>
            <hr />
            <h4>{this.state.homeLink}</h4>
            <input
              type="text"
              value={this.state.homeLink}
              onChange={event => this.onHandleChange(event)}
            />
            <button
              onClick={this.handleChangeLink.bind(this)}
              className="btn btn-dark"
            >
              Change Home link
            </button>
          </div>
        </div>
      </div>
    )
  }
}
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
