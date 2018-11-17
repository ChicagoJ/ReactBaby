import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
const changeList = data => ({
  type: constants.GET_LIST_ITEM,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getInputFocuse = () => ({
  type: constants.INPUT_FOCUS
})
export const getInputBlur = () => ({
  type: constants.INPUT_BLUR
})

export const getList = () => {
  return dispatch => {
    axios
      .get('/api/trendingList.json')
      .then(res => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('error')
      })
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const switchPage = page => ({
  type: constants.SWITCH_PAGE,
  page
})
