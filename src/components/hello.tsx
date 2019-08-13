import * as React from 'react';
import { Link } from 'react-router-dom';

export const HelloComponent = () => {
  return (
    <div>
      <h2>Hello component !</h2>
      <Link to='/'>Login Page</Link>
    </div>
  );
};
