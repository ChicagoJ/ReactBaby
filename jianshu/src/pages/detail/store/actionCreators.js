import axios from 'axios';
import { constants } from '.';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});
export const getDetail = id => {
  return dispatch => {
    axios
      .get(
        'https://easy-mock.com/mock/5beee18028fc7826b7f1a742/api/detailsList?id=' +
          id
      )
      .then(res => {
        const result = res.data.data;
        dispatch(changeDetail(result.tilte, result.content));
      });
  };
};
