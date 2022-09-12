import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Profile = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <h4 className="page-title">Profile</h4>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
