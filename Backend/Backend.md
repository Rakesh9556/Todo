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
- in js we can import module in two ways (i) common js and (ii) module js
- standarized way to import and export code in different js file 
- it uses "import" and "export" syntax to share code between files
- to use ES modules, we need to set <b>"type": "module"</b> in <b>package.json<b>


### Synchronous Vs Asynchronous
- synchronous operations are the tasks that are executed sequentially, one after the other.
  Each opertion must be complete before the next one starts (ineffcient for tasks that take time, like database operation, file I/O, network req)

- asynchronous operatios are the tasks that are executed concurrently, instead of waiting for a task to complete, the program can continue executing other tasks. When one task completed it signals the program to process the result (via callback, promise or async/await). Used when tasks involvve waiting, like fetching data from a server, reading large file or performing I/O operations.

### Setup HotReloading (nodemon package)
- if we made some changes to code we need to restart the the server everytime to see the updated changes
- it is annoying to restart the server everytime
- for this reason we will use <b>nodemon</b>: this will restart the server everytime when some changes are made

### Setup .gitignore
- it is used to keep the files which we don't want to push into the git
- contains node_modules, .env, etc

### Json Formatter
- used this to format json data

### Axios

### CORS
- url whitelisting

### Proxy (vite)

### Bundlers/tool chain
- it takes multiple files(html, css, js, images, etc) and combines them into a single file or few files, for the purpose of deploying web application
- it makes the 
### Deploy
1. Digital Ocean
2. Heroku
3. railway
4. Cnode
5. Render
6. Cyclic

### Data Modelling
- moon modeler
- eraser.io


### OAuth
- stands for open authorization
- used to implement third party login


### App.js Vs index.js
1. App.js
   - used for setting up main express application
   - handle configuration middlewares (like cors, body parsing, static file serving, etc)
   - also handle routes
   -  Sets up middleware, routes, and exports the Express app instance.

2. index.js
   - entry point of the application
   - start the server
   - initializes configs like env variables, connecting to database, handelling server errors
   - Imports the app from app.js, sets up database connections, configures environment variables, and starts the server.


## Project Creation

### Data Modelling
1. create a model directory inside src directory
1. import mongoose package
2.  create models using monngoose schema:
   - user model
   - task model
   - category model
   - tag model
3. export the model



### Database Connection
1. Create a db directory inside src directory
2. create a DbConnect.js file inside it
3. also define new file called constnt.js inside src directory for defining all constant fields used throught the project (like DB_NAME, DB_URI, PORT, JWT_SECRET, etc)

### Setup app.js

### Setup server(index.js)

### Use nodemon dependency - dev dependency
"dev": "nodemon -r dotenv/config  --experimental-json-modules  src/index.js"
- -r: tell nodemon to require a module before starting the application
- dotenv/config:  automatically load environment variables from a .env file into process.env

### Setuping Utils

#### Standarized error and response
1. create a utils directory inside src directory
2. create ApiError.js file for standardizing all errors

#### Standarized 







