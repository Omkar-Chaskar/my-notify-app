import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  initialLogInData,
  guestData
} from "../utils/constantData/authConstant";
import { useAuth } from "../context";
import { Toasters } from "./toasters";

export default function Login() {
  const [logInData, setLogInData] = useState(initialLogInData);
  const [passVisible, setPassVisible] = useState(true);
  const { logInHandler } = useAuth();

  const logInChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <section className="login">
      <form className="form-action" id="form">
        <h4 className="bold text-center login-header">LogIn</h4>
        <br />
        <div className="login-container">
          <label className="input-label" htmlFor="email">
            Email address
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Jane@compony.com"
            onChange={logInChangeHandler}
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-action"
            type={passVisible ? "password" : "text"}
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            placeholder="********"
            onChange={logInChangeHandler}
            required
          />
          <span className="flex-center">
            {passVisible ? (
              <p className="p1" onClick={() => setPassVisible(!passVisible)}>
                Show Password
              </p>
            ) : (
              <p className="p1" onClick={() => setPassVisible(!passVisible)}>
                Hide Password
              </p>
            )}
          </span>
          <p className="input-danger" id="invalid-password"></p>

          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
              onClick={(e) => {
                logInHandler(logInData);
              }}
            >
              Login
            </button>
            <button
              className="button button-secondary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
              onClick={(e) => {
                logInHandler(guestData);
              }}
            >
              Guest Login
            </button>
            <Link className="link-create" to="/Signup" id="btn-cancel">
              Create New Account
            </Link>
          </div>
        </div>
      </form>
      <Toasters />
    </section>
  );
}
