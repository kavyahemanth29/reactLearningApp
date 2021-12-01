import {
    SET_TAGLINE
  } from "../actionConstants";
   
  // to set the tagline in header
  export const setTagline = tagline => {
    return {
      type: SET_TAGLINE,
      payload: {
        tagline
      }
    }
  }