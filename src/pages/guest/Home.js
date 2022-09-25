import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Oxygen App</h1>
      <p>
        Login to your account <Link to="/login">Login</Link>
      </p>
      <p>
        Go To <Link to="/dashboard">Dashboard</Link>{" "}
      </p>
    </div>
  );
};

export default Home;
