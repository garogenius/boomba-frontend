import React, { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
const OtherPageBody = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  let nav = {
    open: "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active nav_open",
    close:
      "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active ", //topbar_open
  };

  const handleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className={navOpen ? nav["open"] : nav["close"]}>
      <div className="wrapper">
        <div className="main-header">
          {/* <!-- Logo Header --> */}
          <div className="logo-header" data-background-color="blue">
            <a href="index.html" class="logo">
              <img
                src="../assets/img/logo.svg"
                alt="navbar brand"
                className="navbar-brand"
              />
            </a>
            <button
              className="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="icon-menu" onClick={handleOpen}></i>
              </span>
            </button>
            <button className="topbar-toggler more">
              <i className="icon-options-vertical"></i>
            </button>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="icon-menu"></i>
              </button>
            </div>
          </div>
          {/* <!-- End Logo Header -->

			<!-- Navbar Header --> */}
          <NavBar />
          {/* <!-- End Navbar --> */}
        </div>

        {/* <!-- Sidebar --> */}
        <SideBar />
        {/* <!-- End Sidebar --> */}

        <div className="main-panel">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OtherPageBody;
