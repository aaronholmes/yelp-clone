import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import BusinessItem from '../Business/BusinessItem';

// Since this component is simple and static, there's no parent container for it.
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
          <CSSTransitionGroup
            component="ul"
            transitionName="businessList"
            className="businessList"
            transitionAppear={true}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {
              Object
                .keys(this.props.businesses)
                .map(key =>
                  <BusinessItem
                    key={key}
                    business={this.props.businesses[key]}
                    index={key}
                    removeBusiness={this.props.removeBusiness}
                  />)
            }
          </CSSTransitionGroup>
          <div>
            <button onClick={this.props.loadSamples}>Load Sample Businesses</button>
          </div>
      </div>
    );
  }
};

export default Dashboard;
