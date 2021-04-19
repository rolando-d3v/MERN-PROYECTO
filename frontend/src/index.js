import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "rc-pagination/assets/index.css";
import App from "./App";
import AuthState from "./context/auth/authState";
import TogleContext from "./context/togleContext/TogleContext";
import "./index.scss";
import "./sass/styles.scss";
import DarkContextProvider from "./context/darkContext/DarkContext";

ReactDOM.render(
  <React.Fragment>
    <DarkContextProvider>
      <TogleContext>
        <AuthState>
          <App />
        </AuthState>
      </TogleContext>
    </DarkContextProvider>
  </React.Fragment>,
  document.getElementById("root")
);
