import React from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/home";
import { createBrowserHistory } from "history";
import { SiteHeader } from "./components/site-header";
import store from "./redux/store";
import { Provider } from "react-redux";
import { SiteFooter } from './components/footer';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <div className="container"> */}
        <SiteHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <SiteFooter />
        {/* </div> */}
      </Router>
    </Provider>
  );
};

export default App;
