import {
    SET_NAME
  } from "../actionConstants";
   
  // define initial state of head
  const initialState = {
    name: 'Enter Actor Name'
  }
   
  // update store based on type and payload and return the state
  export default function common(state = initialState, action) {
    switch (action.type) {
      case SET_NAME:
        const { name } = action.payload;
        return {
          ...state,
          name
        }
      default:
        return state
    }
  }