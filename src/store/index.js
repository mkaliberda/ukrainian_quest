import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import rootReducer from "./reducers";

const persistConfig = {
  key: "ukrainian_quest",
  storage,
  blacklist: ["points", "symbols"],
};

const middleware = [thunk];

// eslint-disable-next-line no-unused-vars
const enhancers = [];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composedEnhancers);

const persistor = persistStore(store);

export { store, persistor };
