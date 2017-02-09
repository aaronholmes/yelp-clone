import React from 'react';

class BusinessItem extends React.Component {
  render() {
    return (
      <li>
        <h3>{this.props.business.name}</h3>
        <p>{this.props.business.address}</p>
        <button onClick={() => this.props.removeBusiness(this.props.index)}>Delete</button>
      </li>
    );
  }
}

BusinessItem.propTypes = {
  business: React.PropTypes.object.isRequired,
  removeBusiness: React.PropTypes.func.isRequired,
  index: React.PropTypes.string.isRequired
};

export default BusinessItem;
