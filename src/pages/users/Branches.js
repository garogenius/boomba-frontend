import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Branches = () => {
  return (
    <div>
      <div class="wrapper">
        <Navbar />
        <Sidebar />
        <div class="main-panel">
          <div class="content">
            <div class="page-inner">
              <h4 class="page-title">Branches</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
