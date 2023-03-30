import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <h1>404</h1>
        <h2>Ooops, Page Not Found</h2>
        <p>The requested URL was not found on this server.</p>
      </div>
    );
  }
}

export default NotFound;
