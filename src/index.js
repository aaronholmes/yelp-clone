import React from 'react';
import {render} from 'react-dom';
import './styles/styles.scss';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
console.log(env);
render (
  <div>
    <h1>Sample Appy</h1>
    <h3>Environment: </h3>
  </div>, document.getElementById('app')
);
