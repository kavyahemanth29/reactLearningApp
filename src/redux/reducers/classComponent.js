import { SET_CLASS_COMPONENT_DATA } from '../actionConstants';

const INITIAL_STATE = {
  kavya: 'My Name is Kavya'
};

const classReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_CLASS_COMPONENT_DATA:
      return {
        ...state,
        ...action.content,
      };
    default:
      return state;
  }
};

export default classReducer;