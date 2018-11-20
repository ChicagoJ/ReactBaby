import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
class List extends Component {
  render() {
    const { list, changeArticleList, page } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <ListItem key={index}>
            <img className="pic" src={item.get('imgUrl')} alt="" />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        ))}
        <LoadMore onClick={() => changeArticleList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = dispatch => ({
  changeArticleList: page => {
    dispatch(actionCreators.changeArticleList(page))
  }
})
export default connect(
  mapState,
  mapDispatch
)(List)
