import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
  articlePage: 1,
  showScroll: true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        RecommendList: fromJS(action.RecommendList)
      })
    case constants.ChANGE_ARTICLE_DATA:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.page
      })
    default:
      return state
  }
}
