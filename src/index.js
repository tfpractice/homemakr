require('babel-core/register')({});
require('babel-polyfill');

const { app } = require('./server');
// import { app } from './server';

console.log('FUCKING APPP', app);
app.listen(3000, function (){
    console.log('Example app listening on port 3000!');
  });
