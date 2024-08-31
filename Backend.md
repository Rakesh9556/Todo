## Pre Learnings
- we will only handle 1.data, 2.file, 3.API
- nodejs: runtime envirnment for js

### File Structure
- .env
- package.json
- pretteier, lint, git, readme
- src:
    index.js: used for database connection
    app.js: configurations, cookies logic lie here
    constants.js: enums or db_names will lie here
    - DB: folder containing database connection files
    - Models: use to make structures of users, etc
    - Controllers(functions): used to handle business logic
    - Routes: to define the routes
    - Midddlewares:
    - Utils: contains utility files like mail, file upload

## Node js setup
- node -v: to identify node version
- npm -v: to identify node package manager
- Express: handle all request and response (it always listen all request and response in a port)

## Project Setup

### Node initailization
1. npm init: create a empty node application from the node package manager (create package.json)
2. create a script to run the index.js(starting point) of the project
```js
"start": "node index.js"
``` 

### Express Initialization
1. npm i express: to install express in project
2. use the express template to create the server

#### Setup express
  1. import express and dotenv
  2. create express object to access its properties and functionalities
  3. define the port number / import it from .env
  4. define route
  5. start the server
```js
 // import express
 import express from "express"

 // creating express object, using this object we can acess various methods and functionalities of express
 const app = express()

 // define port no. where app will listen
 const port = 3300;

 // define request to handle
 // app.get('route', callback function)
 app.get('/signin', (req, res) => {
    res.send("User signed in successfully")
 })

 // start the server
 app.listen(port,() => {
    console.log("Server is running at ${port}")
 } )
```

### Setup .env package
1. npm i dotenv: to install dotenv package in project
2. define the PORT no. here so that it does not expose in the production or anywhere
3. before using it in any file we first need to import it and config its path


### ES MODULE
- standarized way to import and export code in different js file 
- it uses "import" and "export" syntax to share code between files
- to use ES modules, we need to set <b>"type": "module"</b> in <b>package.json<b>

### Setup HotReloading (nodemon package)
- if we made some changes to code we need to restart the the server everytime to see the updated changes
- it is annoying to restart the server everytime
- for this reason we will use <b>nodemon</b>: this will restart the server everytime when some changes are made


### Setup .gitignore
- it is used to keep the files which we don't want to push into the git
- contains node_modules, .env, etc


### Deploy
1. Digital Ocean
2. Heroku
3. railway
4. Cnode
5. Render
6. Cyclic



