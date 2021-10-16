import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="title">List of reusable components</h1>
      <p className="subtitle">Click on any link to check it out</p>
      <div className="link-list">
        <Link to="/buttons" style={{ textDecoration: "none" }}>
          <div className="link-button">Buttons</div>
        </Link>
        <Link to="/header" style={{ textDecoration: "none" }}>
          <div className="link-button">Header</div>
        </Link>
        <Link to="/jumbotron" style={{ textDecoration: "none" }}>
          <div className="link-button">Jumbotron</div>
        </Link>
        <Link to="/spinners" style={{ textDecoration: "none" }}>
          <div className="link-button">Spinners</div>
        </Link>
      </div>
    </div>
  );
}
