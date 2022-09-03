import { combineReducers } from "redux";

import collectedSymbols from "./collectedSymbols/reducers";
import points from "./points/reducers";
import symbols from "./symbols/reducers";

export default combineReducers({ collectedSymbols, points, symbols });
