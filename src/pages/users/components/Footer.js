import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.themekita.com">
                  ThemeKita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Help
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Name">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright ml-auto">
            2018, design with <i className="fa fa-heart heart text-danger"></i> by{" "}
            <a href="https://www.themekita.com">ThemeKita</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
