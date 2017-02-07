import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL
});

export default base;
