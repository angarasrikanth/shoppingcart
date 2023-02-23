import React, { useState } from "react";
import "../../styles/login.css";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="d-flex container">
      <div >
        <h1>Sign Up</h1>
        <h3>We donot share your personal experience with anyone</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="staticEmail"  value={signupData.firstname} onChange={handleChange} name="firstname"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="staticEmail" value={signupData.lastname} onChange={handleChange} name="lastname"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="staticEmail" value={signupData.email} onChange={handleChange} name="email"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="staticEmail"  value={signupData.password} onChange={handleChange} name="password"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="staticEmail"  value={signupData.confirmPassword} onChange={handleChange} name="confirmPassword"/>
          </div>
        </div>


            
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
