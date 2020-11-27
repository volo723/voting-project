import React, { Component, Suspense } from "react";
import { Provider } from 'react-redux';
import configureStore from './store'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from "react-toastify";

// import history from "helpers/history";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views-main" */ "./views")
);
const ViewDashboard = React.lazy(() =>
  import(/* webpackChunkName: "views-dashboard" */ "./views/dashboard/index")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Suspense fallback={<div className="loading" />}>
            <Provider store={configureStore()}>
              <Router>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => <ViewMain {...props} />}
                  />

                  <Route
                    path="/dashboard"
                    exact
                    render={(props) => <ViewDashboard {...props} />}
                  />

                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />

                  <Route>
                    <Redirect to="/error" />
                  </Route>
                </Switch>
              </Router>
            </Provider>
          </Suspense>
          <ToastContainer
            autoClose={3000}
            // closeButton={<Icon name="close" />}
            // hideProgressBar
            newestOnTop
          />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
