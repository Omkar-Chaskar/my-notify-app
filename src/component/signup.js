import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialSignUpData } from "../utils/constantData/authConstant";
import { useAuth } from "../context";
import { Toasters } from "./toasters";

export default function Signup() {
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const [passVisible, setPassVisible] = useState(true);
  const { signUpHandler } = useAuth();

  const signupChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="signup">
      <form
        className="form-action"
        id="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h4 className="bold text-center login-header">SignUp</h4>
        <br />
        <div className="login-container">
          <label className="input-label" htmlFor="first-name">
            First name{" "}
          </label>
          <input
            className="input-action"
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Adarsh"
            onChange={signupChangeHandler}
            required
          />
          <p className="input-danger" id="invalid-name"></p>
          <br />
          <label className="input-label" htmlFor="email">
            Last name{" "}
          </label>
          <input
            className="input-action"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Balika"
            onChange={signupChangeHandler}
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="email">
            Email address{" "}
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Adarsh@balika.com"
            onChange={signupChangeHandler}
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="password">
            Create Password
          </label>
          <input
            className="input-action"
            type={passVisible ? "password" : "text"}
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            placeholder="********"
            onChange={signupChangeHandler}
            required
          />
          <span className="flex-center">
            {passVisible ? (
              <p
                className="p1 input-danger"
                onClick={() => setPassVisible(!passVisible)}
              >
                Show Password
              </p>
            ) : (
              <p
                className="p1 input-danger"
                onClick={() => setPassVisible(!passVisible)}
              >
                Hide Password
              </p>
            )}
          </span>
          <p className="input-danger" id="invalid-password"></p>
          <br />
          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
              onClick={(e) => {
                signUpHandler(signUpData);
              }}
            >
              Create New Account
            </button>
            <Link className="link-create" to="/Login" id="btn-cancel">
              Already have an account
            </Link>
          </div>
        </div>
      </form>
      < Toasters />
    </section>
  );
}
