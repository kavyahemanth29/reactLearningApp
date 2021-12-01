import {
    SET_NAME
  } from "../actionConstants";
   
  // to set the tagline in header
  export const setname = name => {
    return {
      type: SET_NAME,
      payload: {
        name
      }
    }
  }