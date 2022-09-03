import { connect } from "react-redux";

import { selectPoint } from "store/points/selectors";
import { setCollectedSymbols } from "store/collectedSymbols/actions";
import Point from "./Point";

const mapStateToProps = (state) => {
  return {
    selectPoint: (lookup) => selectPoint(lookup)(state),
  };
};

const mapDispatchToProps = { setCollectedSymbols };

export default connect(mapStateToProps, mapDispatchToProps)(Point);
