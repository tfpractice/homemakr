require('babel-core/register')({});
require('babel-polyfill');

const { app, } = require('./server');

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
