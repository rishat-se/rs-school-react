import React from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants/constants';

type LocationHeadingProps = {
  className: string;
};

function LocationHeading(props: LocationHeadingProps) {
  const location = useLocation();
  return (
    <>
      <h2 className={props.className}>{paths[location.pathname]}</h2>
    </>
  );
}

export default LocationHeading;
