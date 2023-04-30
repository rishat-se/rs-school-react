import React from 'react';
import { Link } from 'react-router-dom';
import LocationHeading from '../LocationHeading/LocationHeading';

function NavBar() {
  return (
    <header className="nav-bar">
      <h1 className="nav-items">RS-School React App</h1>
      <LocationHeading className="nav-items" />
      <nav>
        <li className="nav-link">
          <Link className="nav-link nav-items" to={`/`}>
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link className="nav-link nav-items" to={`form`}>
            Form
          </Link>
        </li>
        <li className="nav-link">
          <Link className="nav-link nav-items" to={`aboutus`}>
            About Us
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default NavBar;
