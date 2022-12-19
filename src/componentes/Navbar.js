import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <img src={Logo} className="Logo" />
      </div>
      <p>Soundnwave</p>

      <ul>
        <Link to="/">
          <li>Discover</li>
        </Link>
        <Link to="/">
          <li>Join</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
