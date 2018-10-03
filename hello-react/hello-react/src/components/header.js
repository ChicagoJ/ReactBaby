import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-8">
          <h1>{this.props.homeLink}</h1>
        </div>
      </div>
    )
  }
}
