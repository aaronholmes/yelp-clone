import React from 'react';
import {render} from 'react-dom';
import './styles/styles.scss';

render (
  <div>
    <h1>Sample Appy</h1>
    <h3>Environment: {process.env.TEST}</h3>
  </div>, document.getElementById('app')
);
