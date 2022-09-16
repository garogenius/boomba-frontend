import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Boomba Inventory app</h1>
      <p>
        Go To <Link to="/dashboard">Dashboard</Link>{" "}
      </p>
    </div>
  );
};

export default Home;
