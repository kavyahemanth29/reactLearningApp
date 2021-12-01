import { SET_CALCULATOR_DATA } from '../actionConstants'; // importing constant value

export function setClaculatorData(content) {
  return {
    type: SET_CALCULATOR_DATA, // action type
    content, // content to update the value from reducer
  };
}

export function updateTheCalValue(obj) {
  return (dispatch) => {
    dispatch(setClaculatorData(obj));
  };
}