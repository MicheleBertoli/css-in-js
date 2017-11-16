import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
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
  }
}

export default Navbar;
