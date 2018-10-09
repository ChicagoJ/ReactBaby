import React, { Component } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
//复合组件
class Panel extends Component {
  constructor() {
    super()
    this.state = {
      color: 'black'
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <button
          onClick={() => {
            this.setState({ color: 'red' })
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.setState({ color: 'green' })
          }}
          className="btn btn-success"
        >
          Green
        </button>
        <PanelHead head={this.props.head} color={this.state.color} />
        <PanelBody body={this.props.body} color={this.state.color} />
        <PanelFooter footer={this.props.footer} color={this.state.color} />
      </div>
    )
  }
}

class PanelHead extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }} className="panel-heading">
        {this.props.head}
      </div>
    )
  }
}
class PanelBody extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }} className="panel-body">
        {this.props.body}
      </div>
    )
  }
}
class PanelFooter extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }} className="panel-footer">
        {this.props.footer}
      </div>
    )
  }
}

render(<Panel head="Head" body="Body" footer="Footer" />, window.app)
