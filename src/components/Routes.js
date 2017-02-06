import React from 'react';
import { Match, Miss } from 'react-router';
import Dashboard from './Dashboard/Dashboard';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Business from './Business/Business';

// Since this component is simple and static, there's no parent container for it.
const Routes = () => {
  return (
    <div>
      <Match exactly pattern="/" component={Dashboard}/>
      <Match exactly pattern="/search/:term" component={Dashboard}/>
      <Match exactly pattern="/about" component={AboutPage}/>
      <Match exactly pattern="/business/add" component={Business}/>
      <Miss component={NotFoundPage}/>
    </div>
  );
};

export default Routes;
