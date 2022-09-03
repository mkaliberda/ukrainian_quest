import _ from "lodash";
import { SET_COLLECTED_SYMBOLS } from "./actionTypes";

export const setCollectedSymbols = (symbolName) => (dispatch, getState) => {
  const state = getState();
  let payloads = state?.collectedSymbols?.data || [];
  payloads = _.union([symbolName], payloads);
  dispatch({ type: SET_COLLECTED_SYMBOLS, payloads });
};
