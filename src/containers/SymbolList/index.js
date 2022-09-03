import { connect } from "react-redux";

import data from "data";
import { selectCollectedSymbolList } from "store/collectedSymbols/selectors";
import SymbolList from "./SymbolList";

const mapStateToProps = (state) => {
  const rules = data.home.rules;

  return {
    rules: rules || [],
    collectedSymbols: selectCollectedSymbolList(state),
  };
};

export default connect(mapStateToProps)(SymbolList);
