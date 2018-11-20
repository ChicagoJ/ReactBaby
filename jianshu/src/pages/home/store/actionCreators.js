import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  RecommendList: result.RecommendList
})
const changeArticleData = (result, nextPage) => ({
  type: constants.ChANGE_ARTICLE_DATA,
  list: fromJS(result),
  page: nextPage
})
export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/homeList.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const changeArticleList = page => {
  return dispatch => {
    axios
      .get(
        'https://easy-mock.com/mock/5beee18028fc7826b7f1a742/api/articleList?page=' +
          page
      )
      .then(res => {
        const result = res.data.data
        dispatch(changeArticleData(result, page + 1))
      })
  }
}
export const toggleTopShow = show => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})
