import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localStorageHelper from "./helpers/localstorage";
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./router/privateRoute";
import PublicRoute from "./router/publicRoute";
function App() {
  return (
    <div style={{ overflow: "hidden" }} className="App">
      <ToastContainer />
      <Router>
        <ScrollToTop />
        <Route
          path="/"
          render={() =>
            localStorageHelper.getData("auth") ? (
              <Route component={PrivateRoute} />
            ) : (
              <Route component={PublicRoute} />
            )
          }
        />
      </Router>
    </div>
  );
}

export default App;