import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div
        className="logo-header"
        data-background-color="blue"
        onClick={handleClick}
      >
        <a href="index.html" className="logo">
          <img src={logo} alt="navbar brand" className="navbar-brand" />
        </a>
        <div className="">
          {!nav ? (
            <button
              className="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="icon-menu"></i>
              </span>
            </button>
          ) : (
            <button className="topbar-toggler more">
              <i className="icon-options-vertical"></i>
            </button>
          )}
        </div>

        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="icon-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
