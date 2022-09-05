import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div>
      <div class="wrapper">
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
