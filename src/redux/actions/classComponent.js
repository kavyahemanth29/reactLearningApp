import { SET_CLASS_COMPONENT_DATA } from '../actionConstants'; // importing constant value

export function setClassComponentData(content) {
  debugger
  return {
    type: SET_CLASS_COMPONENT_DATA, // action type
    content, // content to update the value from reducer
  };
}

export function updateTheValue(obj) {
  debugger
  return (dispatch) => {
    dispatch(setClassComponentData(obj));
  };
}