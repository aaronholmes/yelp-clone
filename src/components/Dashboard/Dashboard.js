import React from 'react';
import BusinessItem from '../Business/BusinessItem';

// Since this component is simple and static, there's no parent container for it.
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>
          <ul>
            {
              Object
                .keys(this.props.businesses)
                .map(key => <BusinessItem key={key} business={this.props.businesses[key]} />)
            }
          </ul>
          <div>
            <button onClick={this.props.loadSamples}>Load Sample Businesses</button>
          </div>
        </p>
      </div>
    );
  }
};

export default Dashboard;
