import React, { useState } from "react";
import axios from "axios";

const url = "https://angularjwtauthentication.herokuapp.com/api/user";

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios
      .post(`${url}/login`, loginInputs)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row m-3">
      <div className="col">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary mb-3" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  const [registerInputs, setRegisterInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInputs({ ...registerInputs, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    axios
      .post(`${url}/register`, registerInputs)
      .then((res) => {
        alert("User Registered successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row m-3">
      <div className="col">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary mb-3" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    let token = sessionStorage.getItem("token");
    if (!token) {
      alert("Please login");
      return;
    }
    axios
      .get(`${url}/list`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.text);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className="btn btn-primary m-3"
        onClick={() => setIsLogin(!isLogin)}
      >
        {" "}
        {isLogin ? "Register" : "Login"}
      </button>
      <button className="btn btn-danger m-3" onClick={handleAuth}>
        List
      </button>
      <div>{isLogin ? <Login /> : <Register />}</div>
    </div>
  );
};

export default Auth;
