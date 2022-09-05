import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div>
      <div class="wrapper">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
