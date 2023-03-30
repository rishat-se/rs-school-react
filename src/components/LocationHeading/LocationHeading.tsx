import React, { Component } from 'react';
import { withRouter, WithRouterProps } from '../../utils/withRouter';

const paths: { [key: string]: string } = {
  ['/']: 'Home',
  ['/form']: 'Form',
  ['/aboutus']: 'About Us',
};

class LocationHeading extends Component<WithRouterProps & { className: string }> {
  render() {
    return (
      <>
        <h2 className={this.props.className}>{paths[this.props.location.pathname]}</h2>
      </>
    );
  }
}

export default withRouter(LocationHeading);
