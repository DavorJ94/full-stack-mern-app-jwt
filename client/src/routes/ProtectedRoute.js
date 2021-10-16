import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import freezer from "../store";
import { postReq } from "./postReq";

function ProtectedRoute({ component: Component, ...rest }) {
  const [shouldRender, setShouldRender] = useState(false);
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      setShouldRender(await postReq(history));
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {shouldRender && (
        <Route
          {...rest}
          render={(props) => {
            if (freezer.get().loggedIn) {
              return <Component />;
            } else {
              return (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              );
            }
          }}
        ></Route>
      )}
    </>
  );
}

export default ProtectedRoute;
