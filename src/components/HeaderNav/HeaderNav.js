import React from 'react';
import { Link, IndexLink } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const HeaderNav = () => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/about">About</Link>
    </div>
  );
};

export default HeaderNav;
