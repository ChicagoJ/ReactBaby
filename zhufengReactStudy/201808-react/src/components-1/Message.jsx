import React, { Component } from 'react'
class Message extends Component {
  render() {
    let { index, message } = this.props
    return (
      <li key={index} className="list-group-item">
        {message.username}:{message.content + '  '}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.deleteMessage(index)
          }}
        >
          删除
        </button>
        <span className="pull-right">{message.createAt.toLocaleString()}</span>{' '}
      </li>
    )
  }
}

export default Message
