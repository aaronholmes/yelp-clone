import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const Search = () => {
  return (
    <form>
      <h2>Search for Restaurant</h2>
      <input type="text" required placeholder="Search for restaurant..." />
      <button type="submit">Find</button>
    </form>
  );
};

export default Search;
