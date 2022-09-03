import _ from "lodash";
import { generatePath } from "react-router-dom";
import { ROUTES } from "routers";

export const selectPointListWithRoutes = (state) => {
  if (!_.isEmpty(state.points?.data)) {
    return state.points.data.map(({ lookup, ...pointObj }) => ({
      ...pointObj,
      lookup,
      routePath: generatePath(ROUTES.POINT.path, { lookup }),
    }));
  }
  return [];
};

export const selectPoint = (lookup) => (state) => {
  if (!_.isEmpty(state.points?.data)) {
    return state.points.data.find((point) => point.lookup === lookup) || {};
  }
  return {};
};
