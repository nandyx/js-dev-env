import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
const port = 3000,
  app = express();



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

app.listen(port, err => {
  if (!err) {
    console.log(chalk.green("Starting app in dev mode"));
    open('http://localhost:' + port);
  }
  else
    console.log(chalk.red("Could not run the app", err));
});
