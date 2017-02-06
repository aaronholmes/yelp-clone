import React from 'react';
import AddBusinessForm from './AddBusinessForm';

// Since this component is simple and static, there's no parent container for it.
const Business = () => {
  return (
    <div>
      <h1>Add a new business</h1>
      <AddBusinessForm/>
    </div>
  );
};

export default Business;
