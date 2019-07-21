import React from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/home";
import { createBrowserHistory } from "history";
import { SiteHeader } from "./components/site-header";
import store from "./redux/store";
import { Provider } from "react-redux";
import { SiteFooter } from './components/footer';
import DeveloperPage from "./pages/developer";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <SiteHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/developer" component={DeveloperPage} />
          </Switch>
          <SiteFooter />
      </Router>
    </Provider>
  );
};

export default App;
