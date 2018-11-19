import React, { Component } from 'react'
import { RecommendList, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <RecommendList>
          {list.map(item => (
            <RecommendItem key={item.get('id')}>
              <img className="rec-img" src={item.get('imgUrl')} alt="" />
            </RecommendItem>
          ))}
        </RecommendList>
      </div>
    )
  }
}
const mapState = state => ({
  list: state.getIn(['home', 'RecommendList'])
})
export default connect(
  mapState,
  null
)(Recommend)
