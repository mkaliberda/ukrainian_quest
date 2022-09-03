import _ from "lodash";

export const selectSymbolList = (state) => {
  if (!_.isEmpty(state.symbols?.data)) {
    return state.symbols.data || [];
  }
  return [];
};

export const selectSymbol = (lookup) => (state) => {
  if (!_.isEmpty(state.symbols?.data)) {
    return state.symbols.data.find((symbol) => symbol.lookup === lookup) || {};
  }
  return {};
};
