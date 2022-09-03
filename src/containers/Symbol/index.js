import { connect } from "react-redux";

import data from "data";
import { selectSymbol } from "store/symbols/selectors";
import Symbol from "./Symbol";

const mapStateToProps = (state) => {
  const rules = data.home.rules;

  return {
    rules: rules || [],
    selectSymbol: (lookup) => selectSymbol(lookup)(state),
  };
};

export default connect(mapStateToProps)(Symbol);
