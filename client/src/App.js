import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Buttons,
  Home,
  Header,
  Jumbotron,
  Spinner,
  Login,
  SignUp,
} from "./pages/ts";
import { MainHeader } from "./Components";
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginSignUpRoute from "./routes/LoginSignUpRoute";
import { postReq } from "./routes/postReq";

function App() {
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      await postReq(history);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <MainHeader />
      <Switch>
        <LoginSignUpRoute path="/login" component={Login} />
        <LoginSignUpRoute path="/signup" component={SignUp} />
        <Route exact path="/">
          <Home />
        </Route>
        <ProtectedRoute path="/buttons" component={Buttons} />
        <ProtectedRoute path="/header" component={Header} />
        <ProtectedRoute path="/jumbotron" component={Jumbotron} />
        <ProtectedRoute path="/spinners" component={Spinner} />
      </Switch>
    </div>
  );
}

export default App;
