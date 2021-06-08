import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "rc-pagination/assets/index.css";
import AuthState from "./context/auth/authState";
import TogleContext from "./context/togleContext/TogleContext";
import DarkContextProvider from "./context/darkContext/DarkContext";
import './sass/index.scss'

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
