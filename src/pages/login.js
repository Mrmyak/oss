import React, {useState } from "react";
import "./login.css";
import Axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [serverMessage, setServerMessage] = useState("");

  const data={
    "email":Email,
    "password":password

  };
  const submitData = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "https://soe-backend.herokuapp.com/v1/login",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      console.log(res.data.authentication.token);
      localStorage.setItem(
        "Authorization",
        ("Bearer "+ res.data.authentication.token)
      );
      console.log(localStorage.getItem("Authorization"));
      
    });
  };

  return (
    <div className="back">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={submitData}>
          <div className="inputBox">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
            <label for="">Email</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label for="">Password</label>
          </div>
          <input type="submit" name="" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
