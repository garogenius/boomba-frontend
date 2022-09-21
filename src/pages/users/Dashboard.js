import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const Dashboard = () => {
  let nav = {
    open: "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active nav_open",
    close:
      "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active",
  };
  return (
    <div className={nav['close']}>
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
