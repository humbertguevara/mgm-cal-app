# MGM Calendar App
- MGM test calendar application
- Web based application acces through a web browser with an accompaying means of persisting data and working with private information that exits on a server.

## Introduction

### For the clients (frontend) we will use:
* React
* Redux

### Backend:

* Server
    ** Express will serves a static HTML page which then runs the client applciation

* REST API
    ** We will use a REST API to communicate from our clients with the backend via HTTP

* Database
    ** Mongo DB will stores data persistently in non-relational database 


## Tasks

### Frontend

1. Set up Webpack and Babel to support our application ES6 & JSX

    - Webpack
        ~ npm install --save-dev webpack
        ~ npm install --save-dev webpack-cli
        ~ npm install --save-dev webpack-dev-server
        ~ code webpack.config.js

    - Babel
        ~ npm install --save-dev @babel/core
        ~ npm install --save-dev @babel/node
        ~ npm install --save-dev @babel/preset-env
        ~ npm install --save-dev @babel/preset-react
        ~ npm install --save-dev @babel/register
        ~ npm install --save-dev babel-loader
        ~ code .babelrc   

    - Others npm packages
        ~ npm install --save-dev concurrently@4.0.1
        ~ npm install --save-dev axios@0.18.0 
        ~ npm install --save md5     

2. Create a Redux store to update and manage local application state

3. Create default application state as JSON file for development
    ~ code src/app/server/defaultServer.js

4. Create basic Redux store to provide state application as necessary
    ~ npm install --save redux-logger
    ~ npm install --save redux-saga
        
5. Assemble website out of Reat components
    ~ npm install --save react
    ~ npm install --save react-dom
    ~ npm install --save react-redux
    ~ npm install --save react-router
    ~ npm install --save react-router-dom    
    ~ npm install --save history

6. Add styling with Bootstrap

### Backend

1. Install MongoDB
    ~ npm install --save-dev mongodb@3.1.10

2. Setup server (Express)
    ~ npm install --save-dev express@4.16.3 
    ~ npm install --save-dev cors@2.8.4 
    ~ npm install --save-dev body-parser@1.18.

3. Config Node to communicate MongoDB with Express

4. Create REST API to persist data on our server
