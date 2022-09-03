import data from "data";

const initialState = { data: data.points, isFetching: false };
export const points = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default points;
