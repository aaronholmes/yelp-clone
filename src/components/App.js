import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import _ from 'lodash';
import HeaderNav from './HeaderNav/HeaderNav';
import Search from './Search/Search';
import Routes from './Routes';
import SampleBusinesses from './Business/SampleBusinesses';
import base from '../base';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor() {
    super();

    this.addBusiness = this.addBusiness.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      businesses: {},
      order: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/businesses`, {
      context: this,
      state: 'businesses'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBusiness(business) {
    const businesses = {...this.state.businesses};
    const busKey = _.uniqueId('business-');

    businesses[busKey] = business;

    this.setState({ businesses })
  }

  loadSamples() {
    this.setState({
      businesses: SampleBusinesses
    })
    console.log("loaded samples");
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <HeaderNav />
            <Search />
            <Routes addBusiness={ this.addBusiness } loadSamples={this.loadSamples} businesses={this.state.businesses} />
          </div>
        </BrowserRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

console.log(process.env);
