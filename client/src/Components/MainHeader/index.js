import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import freezer from "../../store";
import { MainHeaderContainer, WelcomeMessage } from "./styles/mainHeader";
function MainHeader() {
  // eslint-disable-next-line no-unused-vars
  const [rerender, setRerender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    freezer.on("update", (current, prev) => {
      if (
        current.email !== prev.email ||
        current.shouldRenderHeader !== prev.shouldRenderHeader
      )
        setRerender((prev) => !prev);
    });
  }, []);

  const handleLogout = async (e) => {
    const email = freezer.get().email;
    freezer.get().set("loggedIn", false);
    freezer.get().set("email", "");

    try {
      await fetch("http://127.0.0.1:3000/logout", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <MainHeaderContainer>
      {freezer.get().email ? (
        <>
          <WelcomeMessage>Welcome, {freezer.get().email}</WelcomeMessage>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="btn" onClick={handleLogout}>
              Log out
            </button>
          </Link>
        </>
      ) : freezer.get().shouldRenderHeader && !freezer.get().loggedIn ? (
        <>
          <Link
            to={freezer.get().loggedIn ? location.pathname : "/login"}
            style={{ textDecoration: "none" }}
          >
            <button className="btn">Log in</button>
          </Link>
          <Link
            to={freezer.get().loggedIn ? location.pathname : "/signup"}
            style={{ textDecoration: "none" }}
          >
            <button className="btn">Sign Up</button>
          </Link>
        </>
      ) : (
        window.location.pathname === "/" && (
          <button className="btn">Loading...</button>
        )
      )}
    </MainHeaderContainer>
  );
}

export default MainHeader;
