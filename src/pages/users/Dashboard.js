import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const Dashboard = () => {
  return (
    <div>
      <div class="wrapper">
        <Navbar />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
