import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreator } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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
    const {
      focused,
      mouseEnter,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleSwitch
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (i < newList.length) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        } else {
          break
        }
      }
    }

    if (focused || mouseEnter) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwtich
              onClick={() => {
                handleSwitch(page, totalPage, this.spin)
              }}
            >
              <i ref={spin => (this.spin = spin)} className="fas fa-sync" />
              换一批
            </SearchInfoSwtich>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else return null
  }
  render() {
    const {
      focused,
      list,
      handleInputBlur,
      handleInputFocus,
      login,
      logout
    } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {!login ? (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          ) : (
            <NavItem onClick={logout} className="right">
              退出
            </NavItem>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  handleInputFocus(list)
                }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe61d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/post">
            <Button className="writing">
              <i className="iconfont">&#xe600;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus: list => {
      list.size === 0 && dispatch(actionCreator.getList())
      dispatch(actionCreator.getInputFocuse())
    },
    handleInputBlur: () => {
      dispatch(actionCreator.getInputBlur())
    },
    handleMouseEnter: () => {
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(actionCreator.mouseLeave())
    },
    handleSwitch: (page, totalPage, spin) => {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      let spinAngle = 360
      let newAngle = spinAngle + originAngle
      spin.style.transform = `rotate(${newAngle}deg)`

      if (page < totalPage) {
        dispatch(actionCreator.switchPage(page + 1))
      } else {
        dispatch(actionCreator.switchPage(1))
      }
    },
    logout: () => {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
