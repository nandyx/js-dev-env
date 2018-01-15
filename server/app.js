import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = process.env.port || 3000,
  app = express(),
  compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static(path.join(__dirname, '../public')));

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
