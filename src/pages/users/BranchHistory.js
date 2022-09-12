import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const BranchHistory = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <h4 className="page-title">Branch History</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchHistory;
