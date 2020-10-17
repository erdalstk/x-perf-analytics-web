import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./constants/routes";
import NavBar from "./components/NavBar";

const queryCache = new QueryCache();
function App() {
  return (
    <div className="app">
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <NavBar />
          <Container>
            <Switch>
              {Routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Container>
        </Router>
      </ReactQueryCacheProvider>
    </div>
  );
}

export default App;
