import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Supplier = () => {
  return (
    <div>
      <div class="wrapper">
        <Navbar />
        <Sidebar />
        <div class="main-panel">
          <div class="content">
            <div class="page-inner">
              <h4 class="page-title">Supplier</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
