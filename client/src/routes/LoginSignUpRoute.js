import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import freezer from "../store";

function LoginSignUpRoute({ component: Component, ...rest }) {
  // eslint-disable-next-line no-unused-vars
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    freezer.on("update", (current, prev) => {
      if (current.loggedIn !== prev.loggedIn) setRerender((prev) => !prev);
    });
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!freezer.get().loggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default LoginSignUpRoute;
