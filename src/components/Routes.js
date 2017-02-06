import React from 'react';
import { Match, Miss } from 'react-router';
import Dashboard from './Dashboard/Dashboard';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Business from './Business/Business';

class Routes extends React.Component {

  render() {
    return (
      <div>
        <Match exactly pattern="/" render={props => <Dashboard loadSamples={this.props.loadSamples} businesses={this.props.businesses} />} />
        <Match exactly pattern="/search/:term" render={props => <Dashboard loadSamples={this.props.loadSamples} businesses={this.props.businesses} />} />
        <Match exactly pattern="/about" component={AboutPage}/>
        <Match pattern="/business/add" render={props => <Business addBusiness={this.props.addBusiness}/>} />
        <Miss component={NotFoundPage}/>
      </div>
    );
  }

};

export default Routes;
