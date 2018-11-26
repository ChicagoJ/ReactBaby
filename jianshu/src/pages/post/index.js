import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
class Post extends Component {
  render() {
    const { loginState } = this.props
    if (loginState) {
      return <div>Post</div>
    } else {
      return <Redirect to="/login" />
    }
  }
}
const mapState = state => ({
  loginState: state.getIn(['login', 'login'])
})

export default connect(
  mapState,
  null
)(Post)
