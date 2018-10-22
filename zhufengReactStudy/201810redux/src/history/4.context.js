import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Container extends Component {
  getChildContext() {
    return { color: 'green' }
  }
  render() {
    return <MessageList message={this.props.message} />
  }
}

Container.childContextTypes = {
  color: PropTypes.string
}

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.message.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>
    )
  }
}
class Message extends Component {
  render() {
    return <li style={{ color: this.context.color }}>{this.props.message}</li>
  }
}
Message.contextTypes = {
  color: PropTypes.string
}
let message = [1, 2, 3]
ReactDOM.render(
  <Container message={message} />,
  document.querySelector('#root')
)
