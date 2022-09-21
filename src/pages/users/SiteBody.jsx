import React, { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DashBody from "./DashBody";

const SiteBody = ({children}) => {
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
      <div class="wrapper">
        <div class="main-header">
          {/* <!-- Logo Header --> */}
          <div class="logo-header" data-background-color="blue">
            <a href="index.html" class="logo">
              <img
                src="../assets/img/logo.svg"
                alt="navbar brand"
                class="navbar-brand"
              />
            </a>
            <button
              class="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="icon-menu" onClick={handleOpen}></i>
              </span>
            </button>
            <button class="topbar-toggler more">
              <i class="icon-options-vertical"></i>
            </button>
            <div class="nav-toggle">
              <button class="btn btn-toggle toggle-sidebar">
                <i class="icon-menu"></i>
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

        <div class="main-panel">
          <div class="content">
            {children}
          </div>
           <Footer/>
        </div>

        {/* <!-- Custom template | don't include it in your project! --> */}
        {/* <div class="custom-template">
			<div class="title">Settings</div>
			<div class="custom-content">
				<div class="switcher">
					<div class="switch-block">
						<h4>Logo Header</h4>
						<div class="btnSwitch">
							<button type="button" class="changeLogoHeaderColor" data-color="dark"></button>
							<button type="button" class="selected changeLogoHeaderColor" data-color="blue"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="purple"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="light-blue"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="green"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="orange"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="red"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="white"></button>
							<br/>
							<button type="button" class="changeLogoHeaderColor" data-color="dark2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="blue2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="purple2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="light-blue2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="green2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="orange2"></button>
							<button type="button" class="changeLogoHeaderColor" data-color="red2"></button>
						</div>
					</div>
					<div class="switch-block">
						<h4>Navbar Header</h4>
						<div class="btnSwitch">
							<button type="button" class="changeTopBarColor" data-color="dark"></button>
							<button type="button" class="changeTopBarColor" data-color="blue"></button>
							<button type="button" class="changeTopBarColor" data-color="purple"></button>
							<button type="button" class="changeTopBarColor" data-color="light-blue"></button>
							<button type="button" class="changeTopBarColor" data-color="green"></button>
							<button type="button" class="changeTopBarColor" data-color="orange"></button>
							<button type="button" class="changeTopBarColor" data-color="red"></button>
							<button type="button" class="changeTopBarColor" data-color="white"></button>
							<br/>
							<button type="button" class="changeTopBarColor" data-color="dark2"></button>
							<button type="button" class="selected changeTopBarColor" data-color="blue2"></button>
							<button type="button" class="changeTopBarColor" data-color="purple2"></button>
							<button type="button" class="changeTopBarColor" data-color="light-blue2"></button>
							<button type="button" class="changeTopBarColor" data-color="green2"></button>
							<button type="button" class="changeTopBarColor" data-color="orange2"></button>
							<button type="button" class="changeTopBarColor" data-color="red2"></button>
						</div>
					</div>
					<div class="switch-block">
						<h4>Sidebar</h4>
						<div class="btnSwitch">
							<button type="button" class="selected changeSideBarColor" data-color="white"></button>
							<button type="button" class="changeSideBarColor" data-color="dark"></button>
							<button type="button" class="changeSideBarColor" data-color="dark2"></button>
						</div>
					</div>
					<div class="switch-block">
						<h4>Background</h4>
						<div class="btnSwitch">
							<button type="button" class="changeBackgroundColor" data-color="bg2"></button>
							<button type="button" class="changeBackgroundColor selected" data-color="bg1"></button>
							<button type="button" class="changeBackgroundColor" data-color="bg3"></button>
							<button type="button" class="changeBackgroundColor" data-color="dark"></button>
						</div>
					</div>
				</div>
			</div>
			<div class="custom-toggle">
				<i class="flaticon-settings"></i>
			</div>
		</div>  */}
      </div>
    </div>
  );
};

export default SiteBody;
