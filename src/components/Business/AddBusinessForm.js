import React from 'react';

class AddBusinessForm extends React.Component {
  constructor() {
    super();
    this.addBusiness = this.addBusiness.bind(this);
  }
  addBusiness(event) {
    event.preventDefault();
    console.log("here");
    const business = {
      name: this.name.value,
      address: this.address.value
    }
    console.log(business);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addBusiness}>
          <input ref={(input) => this.name = input} type="text" placeholder="Business Name..." />
          <input ref={(input) => this.address = input} type="text" placeholder="Address.." />
          <button type="submit">Add Business</button>
        </form>
      </div>
    )
  }
}

export default AddBusinessForm;
