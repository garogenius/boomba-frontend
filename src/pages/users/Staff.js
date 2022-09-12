import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Staff = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <h4 className="page-title">Staffs</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
