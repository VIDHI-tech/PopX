import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./style.css";

function LoginPage() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.email === formData.email &&
      storedUserData.password === formData.password
    ) {
      navigate("/profile"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="main-div">
      <h2>Signin to your PopX account</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
