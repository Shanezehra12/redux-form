import React, { useState } from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../actions/nameActions";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  ///////////////////////////////////////////////////////////////////////////////////////////
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSetName = () => {
    dispatch(setName(inputName));
  };
  /////////////////////////////////////////////////////////////////////////////////////////

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={inputName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={toggleShowPassword}>
              {showPassword ? "" : ""}
            </span>
          </div>

          <Link to="/logout">
            <button onClick={handleSetName}>Login</button>
          </Link>
        </form>
      </div>
      );
    </div>
  );
};

export default LoginScreen;
