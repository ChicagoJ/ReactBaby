import React, { Component } from 'react'
class MessageForm extends Component {
  handleSubmit = event => {
    event.preventDefault()
    //获取用户名的值
    let username = this.username.value
    //获取内容的值
    let content = this.content.value
    this.props.addMessage({ username, content, createAt: new Date() })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="control-lable">
            用户名
          </label>
          <input
            ref={ref => {
              this.username = ref
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label">
            内容
          </label>
          <input
            ref={ref => {
              this.content = ref
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">发表</button>
        </div>
      </form>
    )
  }
}

export default MessageForm
