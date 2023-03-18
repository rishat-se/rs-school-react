import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`aboutus`}>About Us</Link>
        </li>
      </nav>
    );
  }
}

export default NavBar;
