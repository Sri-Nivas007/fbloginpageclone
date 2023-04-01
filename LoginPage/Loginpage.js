import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .post("")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios
      .post("", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log("email", email);
        console.log("password", password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share <br /> with the people in your
          life.
        </div>
      </div>
      <div className="Logincontainer">
        <form onSubmit={handleSubmit}>
          <div className="Logindetails">
            <input
              type="email"
              placeholder="Email address or Phone number "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />{" "}
            <br />
            <button className="btn">
              {" "}
              <Link to="/HeaderArea" className="clr">
                <strong>Log in</strong>{" "}
              </Link>
            </button>
          </div>
        </form>
        <div className="forgot">
          <a href="forget">Forgotten password ?</a>
        </div>
        <br />
        <div className="line"></div> <br />
        <div className="create">
          <button className="btns">
            <strong>Create new account</strong>
          </button>
        </div>
        <div className="page">
          <a href="page create">
            <strong color="black">Create a Page </strong>
          </a>
          for celebrity, brand or business.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
