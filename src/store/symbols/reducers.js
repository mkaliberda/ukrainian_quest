import data from "data";

const initialState = { data: data.symbols, isFetching: false };
export const symbols = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default symbols;
