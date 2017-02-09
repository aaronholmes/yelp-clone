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
        <Match exactly pattern="/" render=
          {
            () =>
              <Dashboard
                loadSamples={this.props.loadSamples}
                removeBusiness={this.props.removeBusiness}
                businesses={this.props.businesses}
              />
          }
        />
        <Match exactly pattern="/search/:term" render=
          {
            () =>
              <Dashboard
                loadSamples={this.props.loadSamples}
                removeBusiness={this.props.removeBusiness}
                businesses={this.props.businesses}
              />
          }
        />
        <Match exactly pattern="/about" component={AboutPage}/>
        <Match pattern="/business/add" render={() => <Business addBusiness={this.props.addBusiness}/>} />
        <Miss component={NotFoundPage}/>
      </div>
    );
  }

}

Routes.propTypes = {
  loadSamples: React.PropTypes.func.isRequired,
  removeBusiness: React.PropTypes.func.isRequired,
  businesses: React.PropTypes.object.isRequired,
  addBusiness: React.PropTypes.func.isRequired
};

export default Routes;
