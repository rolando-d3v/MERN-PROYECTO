import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

import Login from "../pages/login/Login";
import Login2 from "../pages/login2/Login2";
import Publico from "../pages/Publico";
import HomeRouter from "./HomeRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {

  const {user} = useContext(AuthContext)

  return (
        <Switch>
          <PublicRoute exact path="/login"  component={Login}  isAuthenticated={user.logged} />
          <PublicRoute exact path="/login2"  component={Login2}  isAuthenticated={user.logged} />
          <PublicRoute exact path="/publico"  component={Publico}  isAuthenticated={user.logged} />
          <PrivateRoute path="/" component={HomeRouter} isAuthenticated={user.logged} />
        </Switch>
  );
}
