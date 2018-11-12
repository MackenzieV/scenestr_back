'use strict'

const app = require('./api/api.js');
require('./api/events.js');

app.listen(3000, () => {
  console.log('Server started on Port 3000');
  })
