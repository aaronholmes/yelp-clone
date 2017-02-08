import React from 'react';

class BusinessItem extends React.Component {
  render() {
    return (
      <li key={this.props.business.index}>
        <h3>{this.props.business.name}</h3>
        <p>{this.props.business.address}</p>
        <button onClick={() => this.props.removeBusiness(this.props.index)}>Delete</button>
      </li>
    )
  }
}

export default BusinessItem;
