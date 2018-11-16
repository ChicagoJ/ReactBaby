import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwtich,
  SearchInfoItem,
  SearchInfoList
} from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwtich>换一批</SearchInfoSwtich>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map((item, index) => (
              <SearchInfoItem key={index}>{item}</SearchInfoItem>
            ))}
          </SearchInfoList>
        </SearchInfo>
      )
    } else return null
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe61d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus: () => {
      dispatch(actionCreator.getInputFocuse())
      dispatch(actionCreator.getList())
    },
    handleInputBlur: () => {
      dispatch(actionCreator.getInputBlur())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
