import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import HeaderNav from './HeaderNav/HeaderNav';
import AboutPage from './AboutPage';
import Dashboard from './Dashboard/Dashboard';
import Search from './Search/Search';
import NotFoundPage from './NotFoundPage';

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
            <div>
              <Match exactly pattern="/" component={Dashboard}/>
              <Match exactly pattern="/search/:term" component={Dashboard}/>
              <Match exactly pattern="/about" component={AboutPage}/>
              <Miss component={NotFoundPage}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
