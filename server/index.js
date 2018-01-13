const express = require('express'),
  path = require('path'),
  open = require('open'),
  chalk = require('chalk'),
  port = 3000,
  app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

app.listen(port, err => {
  if (!err){
    console.log(chalk.green("Starting app in dev mode"));
    open('http://localhost:' + port);
  }
  else
  console.log(chalk.red("Could not run the app", err));
});
