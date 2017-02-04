import React from 'react';

// Since this component is simple and static, there's no parent container for it.
class Search extends React.Component {
  constructor() {
    super();
    this.processSearch = this.processSearch.bind(this);
  }

  processSearch(event) {
    event.preventDefault();
    console.log(this.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.processSearch}>
        <h2>Search for Restaurant</h2>
        <input
          type="text"
          required
          placeholder="Search for restaurant..."
          ref={(input) => {this.searchTerm = input}}
        />
        <button type="submit">Find</button>
      </form>
    )
  }
};

export default Search;
