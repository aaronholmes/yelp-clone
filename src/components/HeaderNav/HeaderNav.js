import React from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const HeaderNav = () => {
  return (
      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/business/add">Add a new business</Link>
      </div>
  );
};

export default HeaderNav;
