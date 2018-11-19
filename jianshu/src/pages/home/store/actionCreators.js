import axios from 'axios'
import * as constants from './constants'
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  RecommendList: result.RecommendList
})
export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/homeList.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}
