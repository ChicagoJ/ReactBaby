import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const getInputFocuse = () => ({
  type: constants.INPUT_FOCUS
})
export const getInputBlur = () => ({
  type: constants.INPUT_BLUR
})
export const getListItem = data => ({
  type: constants.GET_LIST_ITEM,
  data: fromJS(data)
})
export const getList = () => {
  return dispatch => {
    axios
      .get('/api/trendingList.json')
      .then(res => {
        const data = res.data
        dispatch(getListItem(data.data))
      })
      .catch(() => {
        console.log('error')
      })
  }
}
