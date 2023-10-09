import React from "react";
import "./LogOutScreen.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LogOutScreen = () => {
  const name = useSelector((state) => state.name);

  return (
    <div>
      <div className="logout-screen">
        <h1>Welcome, {name}</h1>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default LogOutScreen;
