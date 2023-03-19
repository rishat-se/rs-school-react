import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header className="nav-bar">
        <h1 className="nav-items">RS-Shool React App</h1>
        <h2 className="nav-items">Home</h2>
        <nav>
          <li className="nav-link">
            <Link className="nav-link nav-items nav-btn" to={`/`}>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link nav-items nav-btn" to={`aboutus`}>
              About Us
            </Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default NavBar;
