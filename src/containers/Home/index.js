import { connect } from "react-redux";

import data from "data";
import { selectPointListWithRoutes } from "store/points/selectors";
import { selectCollectedSymbols } from "store/collectedSymbols/selectors";
import Home from "./Home";

const mapStateToProps = (state) => {
  const rules = data.home.rules;

  return {
    rules: rules || [],
    collectedSymbols: selectCollectedSymbols(state),
    pointListWithRoutes: selectPointListWithRoutes(state),
  };
};

export default connect(mapStateToProps)(Home);
