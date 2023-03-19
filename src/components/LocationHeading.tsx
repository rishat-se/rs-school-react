import React, { Component } from 'react';
import { withRouter, WithRouterProps } from './withRouter';

class LocationHeading extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

//const LocationHeadingComponent = withRouter(LocationHeading);

export default LocationHeading;
