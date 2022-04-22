import React, { useState } from "react";
import "./App.css";

function App(setters, values) {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    passwordHash: "",
    confirmPasswordHash: "",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    city,
    province,
  } = values;
  const {
    setFirstName,
    setLastName,
    setEmail,
    setCity,
    setPassword,
    setConfirmPassword,
    setProvince,
  } = setters;
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(data);
    } else {
      console.log("Passwords are not matching");
    }
  };
  return (
    <div className="main-form">
      <center>
        <label>Sign Up</label>
        <form onSubmit={submitHandler}>
          <label>First Name:</label>
          <input
            className="single-line-field-med"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Last Name:</label>
          <input
            className="single-line-field-med"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            className="single-line-field-med"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            className="single-line-field-med"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <input
            className="single-line-field-med"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <label>City:</label>
          <input
            className="single-line-field-med"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <label>Province:</label>
          <input
            className="single-line-field-med"
            type="text"
            name="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}

export default App;
