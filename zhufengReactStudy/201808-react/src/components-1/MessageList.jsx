import React, { Component } from 'react'
import Message from './Message'
class MessageList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            index={index}
            deleteMessage={this.props.deleteMessage}
          />
        ))}
      </ul>
    )
  }
}

export default MessageList
