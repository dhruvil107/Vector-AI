import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔵 Normal Email/Password Login (backend later)
  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    // 🔴 Abhi direct dashboard (backend baad me)
    navigate("/dashboard");
  };

  return (
    <div className="login-container ">

      <div className="login-card glass">
        <h2>Welcome to RetailVision</h2>
        {/* <p>Login to continue</p> */}


        {/* 🔵 EMAIL / PASSWORD LOGIN */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
    
        {/* 🔵 GOOGLE LOGIN */}
        <div className="google-login">
          <GoogleLogin
            onSuccess={(res) => {
              console.log("Google Token:", res.credential);
              navigate("/dashboard");
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />
        </div>

      <div className="divider">OR</div>
        <p className="note">
          New user? <Link to="/Signup">Create an account</Link>
        </p>
      </div>

    </div>
  );
}

export default Login;
