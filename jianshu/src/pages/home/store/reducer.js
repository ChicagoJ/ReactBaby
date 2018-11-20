import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  RecommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    RecommendList: fromJS(action.RecommendList)
  })
}

const changeArticleData = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.page
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ChANGE_ARTICLE_DATA:
      return changeArticleData(state, action)
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
