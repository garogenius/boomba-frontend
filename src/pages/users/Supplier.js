import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Supplier = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <h4 className="page-title">Supplier</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
