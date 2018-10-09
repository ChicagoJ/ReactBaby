import React, { Component } from 'react'
import MessageList from './MessageList'
class MessageBox extends Component {
  constructor() {
    super()
    //定义默认状态对象 messages 是消息的数组
    this.state = {
      messages: [
        {
          username: 'Mike',
          content: `Today is a good day`,
          createAt: new Date()
        }
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="text-center">欢迎来到BHT留言板</h2>
              </div>
              <div className="panel-body">
                <MessageList messages={this.state.messages} />
              </div>
              <div className="panel-footer" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageBox
