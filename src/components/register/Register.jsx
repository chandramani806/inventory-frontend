import React, { useState } from "react";
// import { AxiosResponse, AxiosError } from "axios";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform JavaScript validation
    if (username === "") {
      setMessage("Please enter your email address");
    } else if (!isValidEmail(username)) {
      setMessage("Please enter a valid email address");
    } else if (password === "") {
      setMessage("Please enter your password");
    } else if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
    } else if (confirmPassword === "") {
      setMessage("Please confirm your password");
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else if (phone.length !== 10) {
      setMessage("Invalid Phone number");
    } else {
      // Validation passed, perform signup logic here
      setMessage("");
      // Continue with your signup logic or redirect to a different page

      let obj = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        phone: phone,
        role: "user",
      };

      console.log(obj);
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation using regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className="container-fluid">
      <div>
      <h4 className="header">INVENTORY MANAGEMENT PORTAL</h4>
        <form onSubmit={handleSubmit} className="form">
          
          <div>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="text"
              value={firstname}
              onChange={handleFirstNameChange}
              placeholder="Firstname"
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="text"
              value={lastname}
              onChange={handleLastNameChange}
              placeholder="Lastname"
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="email"
              value={username}
              onChange={handleUserNameChange}
              placeholder="Email"
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
            />
          </div>
          <div
            style={{ marginBottom: "20px", paddingTop: "20px" }}
            className="form-group"
          >
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
          </div>
          <button className="form-control btn btn-dark" type="submit">
            Signup
          </button>

          {message && <p className="message text-danger">{message}</p>}

          <Link to="/" className="link-primary link-underline-light">
            Already an User ? Login
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Register;
