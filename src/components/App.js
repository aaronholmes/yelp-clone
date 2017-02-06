import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import _ from 'lodash';
import HeaderNav from './HeaderNav/HeaderNav';
import Search from './Search/Search';
import Routes from './Routes';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor() {
    super();
    this.addBusiness = this.addBusiness.bind(this);
    this.state = {
      businesses: {},
      order: {}
    }
  }

  addBusiness(business) {
    const newBusiness = {
      id: _.uniqueId('business-'),
      name: business.name,
      address: business.address
    };
    this.setState({
      businesses: this.state.businesses.concat(newBusiness),
    });
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <HeaderNav />
            <Search />
            <Routes/>
          </div>
        </BrowserRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
