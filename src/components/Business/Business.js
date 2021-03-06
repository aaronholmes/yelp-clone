import React from 'react';
import AddBusinessForm from './AddBusinessForm';

class Business extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a new business</h1>
        <AddBusinessForm addBusiness={this.props.addBusiness} />
      </div>
    );
  }
}

Business.propTypes = {
  addBusiness: React.PropTypes.func.isRequired
};

export default Business;
