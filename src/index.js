require('babel-core/register')({});
require('babel-polyfill');

const { app } = require('./server');
// import { app } from './server';

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
