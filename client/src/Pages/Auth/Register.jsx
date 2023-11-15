import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(false);
    try {
      const res = await axios.post("hhttps://cute-ruby-hose.cyclic.app/auth/signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("hhttps://cute-ruby-hose.cyclic.app/auth/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="loginTitle">Register</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your UserName..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
      <button className="logBtn">
        {" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
