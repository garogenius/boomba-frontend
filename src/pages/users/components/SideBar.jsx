import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../../assets/img/profile.jpg";
const SideBar = () => {
  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <div className="user">
            <div className="avatar-sm float-left mr-2">
              <img
                src={Profile}
                alt="..."
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="info">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="true"
              >
                <span>
                  Hizrian
                  <span className="user-level">Administrator</span>
                  <span className="caret"></span>
                </span>
              </a>
              <div className="clearfix"></div>

              <div className="collapse in" id="collapseExample">
                <ul className="nav">
                  <li>
                    <Link to="">
                      <span className="link-collapse">My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#edit">
                      <span className="link-collapse">Edit Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#settings">
                      <span className="link-collapse">Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav nav-primary">
            <li className="nav-item active">
              <Link to="/dashboard">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li class="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
            </li>
            <li className="nav-item">
              <Link to="/new-sale">
                <i className="fas fa-shopping-cart"></i>
                <p>New Sale</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/store">
                <i className="fas fa-store"></i>
                <p>Store</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="sidebar-style-1.html">
                      <span className="sub-item">View Product</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="overlay-sidebar.html">
                      <span className="sub-item">Add Product</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/all-resources">
                <i className="fas fa-store"></i>
                <p>Resources</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="sidebar-style-1.html">
                      <span className="sub-item">View Product</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="overlay-sidebar.html">
                      <span className="sub-item">Add Product</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/all-branch">
                <i class="fas fa-code-branch"></i>
                <p>Branch</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/all-branch">
                      <span className="sub-item">View Branches</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="overlay-sidebar.html">
                      <span className="sub-item">Create Branch</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/all-staff">
                <i class="fas fa-users"></i>
                <p>Staffs</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="sidebar-style-1.html">
                      <span className="sub-item">View Staffs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="overlay-sidebar.html">
                      <span className="sub-item">Create Staff</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/expenses">
                <i className="fas fa-money-bill-alt"></i>
                <p>Expenses</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/branch-details">
                <i className="fas fa-file-alt"></i>
                <p>View Branch History</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link data-toggle="collapse" to="/supplier">
                <i className="fas fa-dolly-flatbed"></i>
                <p>Suppliers</p>
              </Link>
            </li>
            {/* <li className="nav-item">
                <Link data-toggle="collapse" href="">
                  <i className="fas fa-layer-group"></i>
                  <p>New Sale</p>
                </Link>
              </li> */}

            {/* <li className="nav-item">
                <a data-toggle="collapse" href="#submenu">
                  <i className="fas fa-bars"></i>
                  <p>Menu Levels</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="submenu">
                  <ul className="nav nav-collapse">
                    <li>
                      <a data-toggle="collapse" href="#subnav1">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav1">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="/">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a data-toggle="collapse" href="#subnav2">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav2">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="/">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/">
                        <span className="sub-item">Level 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
