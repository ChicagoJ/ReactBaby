import { constants } from '.'
import axios from 'axios'
const changeLogin = () => ({
  type: constants.LOGIN,
  value: true
})
export const login = (account, password) => {
  return dispatch => {
    axios
      .get('/api/login.json?account=' + account + '&pawword=' + password)
      .then(res => {
        const result = res.data.data
        result ? dispatch(changeLogin()) : console.log('login error')
      })
  }
}
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})
