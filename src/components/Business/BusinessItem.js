import React from 'react';

class BusinessItem extends React.Component {
  render() {
    return (
      <li>
        <h3>{this.props.business.name}</h3>
        <p>{this.props.business.address}</p>
      </li>
    )
  }
}

export default BusinessItem;
