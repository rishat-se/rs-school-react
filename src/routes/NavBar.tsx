import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header className="nav-bar">
        <h1>RS-Shool React App</h1>
        <h2>Home</h2>
        <nav>
          <li className="nav-link">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={`aboutus`}>About Us</Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default NavBar;
