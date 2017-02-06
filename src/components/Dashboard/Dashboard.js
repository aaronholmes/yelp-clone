import React from 'react';

// Since this component is simple and static, there's no parent container for it.
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>
          Dashboard stuffs go here.
          <div>
            <button onClick={this.props.loadSamples}>Load Sample Businesses</button>
          </div>
        </p>
      </div>
    );
  }
};

export default Dashboard;
