import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="User Name"
              ref={input => (this.account = input)}
            />
            <Input
              placeholder="Password"
              ref={input => (this.password = input)}
              type="password"
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
const mapState = state => ({
  loginState: state.getIn(['login', 'login'])
})
const mapDispatch = dispatch => ({
  login: (accountEle, passwordEle) => {
    dispatch(actionCreators.login())
  }
})
export default connect(
  mapState,
  mapDispatch
)(Login)
