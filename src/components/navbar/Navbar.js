import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import imdbLogo from "../../images/imdb.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className=" navbar container xl mx-auto">
        <div className=" nav-container flex items-center flex-no-shrink text-white mr-6">
          <Link to="/">
            {" "}
            <img id="logo" src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="imdb-logo">
          <img id="logo2" src={imdbLogo} alt="logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
