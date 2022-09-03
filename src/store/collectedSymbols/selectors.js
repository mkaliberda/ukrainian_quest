import _ from "lodash";
import { selectSymbolList } from "store/symbols/selectors";

export const selectCollectedSymbols = (state) => {
  if (!_.isEmpty(state.collectedSymbols?.data)) {
    return state.collectedSymbols?.data;
  }
  return [];
};

export const selectCollectedSymbolList = (state) => {
  const collectedSymbols = selectCollectedSymbols(state);
  const symbolsList = selectSymbolList(state);
  if (!_.isEmpty(collectedSymbols) && !_.isEmpty(symbolsList)) {
    return symbolsList.filter((sybmol) => collectedSymbols.includes(sybmol.lookup));
  }
  return [];
};
