import { SET_COLLECTED_SYMBOLS } from "./actionTypes";

const initialState = { data: [] };
export const sources = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTED_SYMBOLS:
      return { data: action.payloads };
    default:
      return state;
  }
};

export default sources;
