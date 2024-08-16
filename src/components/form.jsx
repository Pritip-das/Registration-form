 import "./form.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
export default function Form() {
    const navigate = useNavigate();
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    // /(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return re.test(String(password));
  };
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!userRegistration.username)
      validationErrors.username = "Name is required";
    if (!userRegistration.email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(userRegistration.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!userRegistration.password) {
      validationErrors.password = "Password is required";
    } else if (!validatePassword(userRegistration.password)) {
      validationErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long";
    }
    if (userRegistration.confirmpassword !== userRegistration.password) {
      validationErrors.confirmpassword = "Password not matched";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
        navigate('/greet');
    
     
    }
    setUserRegistration({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container card p-3 mt-2 register-container">
          <h1 className="text-center">Registration Form</h1>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              value={userRegistration.username}
              onChange={handleInputs}
              name="username"
              required
              className="form-control"
            />
            {errors.username && <span>{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={userRegistration.email}
              onChange={handleInputs}
              name="email"
              required
              className="form-control"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                value={userRegistration.password}
                onChange={handleInputs}
                name="password"
                required
                className="form-control"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="btn btn-secondary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                value={userRegistration.confirmpassword}
                onChange={handleInputs}
                name="confirmpassword"
                required
                className="form-control"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="btn btn-secondary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
          </div>
          
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          
         
        </div>
      </form>
    </>
  );
}