const express = require('express'),
  path = require('path'),
  open = require('open'),
  port = 3000,
  app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

app.listen(port, err => {
  if (!err)
    open('http://localhost:' + port);
  else
    console.error('error-server', err);
});
