import React from 'react';
import { paths } from '../../constants/constants';
import { withRouter, WithRouterProps } from '../../utils/withRouter';

function LocationHeading(props: WithRouterProps & { className: string }) {
  return (
    <>
      <h2 className={props.className}>{paths[props.location.pathname]}</h2>
    </>
  );
}

export default withRouter(LocationHeading);
