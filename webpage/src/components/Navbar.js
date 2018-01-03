import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a
        className="navbar-brand"
        href="https://michelebertoli.github.io/css-in-js/"
      >
        CSS in JS
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/MicheleBertoli/css-in-js"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
