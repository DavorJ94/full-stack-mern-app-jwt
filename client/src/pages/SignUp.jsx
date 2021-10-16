import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import freezer from "../store";

function SignUp() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmailError("");
      setEmailValue(e.target.value);
    } else {
      setPasswordError("");
      setPasswordValue(e.target.value);
    }
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:3000/signup", {
        method: "POST",
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.email || data.password) {
        setEmailError(data.email);
        setPasswordError(data.password);
      }
      if (data.user) {
        freezer.get().set("email", data.user);
        freezer.get().set("loggedIn", true);
        history.push("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form action="/signup">
      <h2>Sign up</h2>
      <label htmlFor="email">Email</label>
      <input
        placeholder="Enter your email address"
        onChange={handleChange}
        type="text"
        name="email"
        required
      />
      <div className="email error">{emailError}</div>
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter your password"
        type="password"
        name="password"
        onChange={handleChange}
        required
      />
      <div className="password error">{passwordError}</div>
      <button onClick={handleDataSubmit}>Sign up</button>
    </form>
  );
}

export default SignUp;
