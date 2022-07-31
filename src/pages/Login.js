import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { handleLogin } from "../hooks/Login";
import History from "../helpers/History";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputLogin({ ...inputLogin, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputLogin.email,
      password: inputLogin.password,
    };

    handleLogin(
      data,
      () => History.push("/users"),
      () => formRef.current.reset()
    );
  };

  return (
    <Layout>
      <div className="container-login">
        <div className="header-login">
          <p className="title">Let's sign you in.</p>
          <p className="desc">Welcome back.</p>
          <p className="desc">You've been missed!</p>
        </div>
        <form className="form-login" onSubmit={handleSubmit} ref={formRef}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input-form"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input-form"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <div className="footer-login">
            <p className="desc">
              Don't have an account?
              <span>Register</span>
            </p>
            <button type="submit" className="btn-white">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
