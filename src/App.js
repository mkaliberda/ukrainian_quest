import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppContainer from "componets/layouts/AppContainer";
import Home from "containers/Home";
import Point from "containers/Point";
import Symbol from "containers/Symbol";
import SymbolList from "containers/SymbolList";
import ScrollToTop from "componets/ScrollToTop";

import { store, persistor } from "store";

import { ROUTES } from "routers";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path={ROUTES.HOME.path} element={<Home />}></Route>
              <Route path={ROUTES.POINT.path} element={<Point />}></Route>
              <Route path={ROUTES.SYMBOL.path} element={<Symbol />}></Route>
              <Route path={ROUTES.COLLECTED_SYMBOLS.path} element={<SymbolList />}></Route>
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
