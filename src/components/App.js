import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import HeaderNav from './HeaderNav/HeaderNav';
import Search from './Search/Search';
import Routes from './Routes';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
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
