import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "staff",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend API later
    console.log(formData);

    alert("Signup successful");
    navigate("/login");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card ">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <select name="role" onChange={handleChange}>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>
          <p className="note">
            Alredy have account <Link to="/">login now</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
