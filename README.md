# Javascript Development Environment

*Line CheckList:*
## Package Management
**Options**
 - Bower
 - NPM
 - JSPM
 - Jam
 - volo

  **Recommendation**

  NPM
  
 **Implement**
1.  Install Node:
 
https://nodejs.org/es/

2. Terminal:

`npm init --yes`
 
4. Update dependencies

`npm i -g npm-check-updates` 

> differences between the versions

`ncu`  
>update dependencies

`ncu -u`
> check vulnerabilities with Node Security Platform

`npm i -g nsp`

`nsp check`

## Web Server

 1. **Development WebServers**
 
	**options**
	- http-server
	- live-server
	- Express
	- budo
	- Webpack dev server
	- Browsersync

	 **Recommendation**
	 
	Express
	

> **Dependencies:** path (from node), open, chalk

  
  
**Implement**
	 
```
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
    console.log('error-server', err);
});
```

2.  **Sharing Work-in-progress**

	**options**
	- localtunnel
	- ngrok
	- Surge
	- now
	
	 **Recommendation**
	 
	localtunnel
  
	 **Use**
	  
 `lt --port 3000 --subdomain your_sub_name`

## Automation

**options**
- Grunt
- Gulp
- NPM Scripts

**Recommendation**

NPM Scripts

**Use**

Inside Scripts from  `package.json` :
```
    "start":"node server/index.js",
    "share": "lt --port 3000"
```

## Transpiling

![enter image description here](http://i0.wp.com/techinpink.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-19-at-5.44.19-AM.png)

**options**
- Babel
- TypeScript
- Elm

**Recommendation**

 Babel

>**Dependences:** babel-cli, babel-core, babel-loader, babel-preset-env, babel-register, babel-preset-es2015
 
**Use**

Add `.babelrc` in your project:

```
{
  "presets": [
      "es2015"
  ]
}
```
And modify  npm script:

```
"start": "babel-node server/app.js",
```


