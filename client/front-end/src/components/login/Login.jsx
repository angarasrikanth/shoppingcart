import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  let errorMessage = "";
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginData.username === "" || loginData.password === "") {
      return (errorMessage = <span>Please enter the username/password</span>);
    }
    navigate('/home');
    
  };
  const singupPage = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex container">
      <div>
        <h1>Login</h1>
        <h3>Get access to your Orders,Wishlist and Recommendations</h3>
      </div>
      <div>
        {errorMessage}
        
        <form type="submit" onClick={handleSubmit}>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="staticEmail" value={loginData.username} onChange={handleChange} name="username"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword"  value={loginData.password}  onChange={handleChange} name="password"/>
        </div>
        </div>
        
          <button type="submit" className="btn btn-primary mb-3 login_btn" >
            Login
          </button>
        </form>
        <button className="btn btn-primary mb-3" onClick={singupPage}>
          SignUp
        </button>
      </div>

      <footer className="footer" >
        Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
      </footer>
    </div>
  );
};
export default Login;
