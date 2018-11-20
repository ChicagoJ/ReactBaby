import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
class Home extends Component {
  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4576/feab4469e6317fe3627d23d80fd6d0da09b556e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>Back to Top</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvent()
  }
  componetWillUnmount() {
    this.removeEvent()
  }
  bindEvent = () => {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }
  removeEvent = () => {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }
}

const mapDispatch = dispatch => ({
  changeHomeData: () => {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollShow: () => {
    const position = document.documentElement.scrollTop
    if (position > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(
  mapState,
  mapDispatch
)(Home)
