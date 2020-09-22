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


## Start

### Steps

#### Set up Webpack and Babel to support our application ES6 & JSX

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

#### Frontend tasks

    1. Create a Redux store to update and manage local application state

    2. Create default application state as JSON file for development
        ~ code src/app/server/defaultServer.js

    3. Create basic Redux store to provide state application as necessary
    
    4. Assemble website out of Reat components
        ~ npm install --save react
        ~ npm install --save react-dom
        ~ npm install --save react-redux
        ~ npm install --save react-router-dom
        ~ npm install --save history


    5. Add styling with Bootstrap
