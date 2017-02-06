import React from 'react';

class AddBusinessForm extends React.Component {
  constructor() {
    super();
    this.createBusiness = this.createBusiness.bind(this);
  }
  createBusiness(event) {
    event.preventDefault();
    const business = {
      name: this.name.value,
      address: this.address.value
    }
    this.props.addBusiness(business);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.createBusiness}>
          <input ref={(input) => this.name = input} type="text" placeholder="Business Name..." />
          <input ref={(input) => this.address = input} type="text" placeholder="Address.." />
          <button type="submit">Add Business</button>
        </form>
      </div>
    )
  }
}

export default AddBusinessForm;
