import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './MessageBox.css'
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
  addMessage = message => {
    //状态对象每次都要生成一个新对象，而不是在旧的对象上修改
    let messages = [...this.state.messages, message]
    this.setState({ messages })
  }
  deleteMessage = index => {
    //先从数组中删除指定的元素
    this.state.messages.splice(index, 1)
    //修改状态
    this.setState({
      messages: [...this.state.messages]
    })
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
                <MessageList
                  messages={this.state.messages}
                  deleteMessage={this.deleteMessage}
                />
              </div>
              <div className="panel-footer">
                <MessageForm addMessage={this.addMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageBox
