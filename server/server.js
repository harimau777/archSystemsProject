var Express = require('express');
var app = new Express();
var compression = require('compression');

//Middleware:
app.use(compression());

//Routing:
app.use(express.static('../client/public'));
app.post('/login', login(req, res));
app.get('/projects', getProjectList(req, res));
app.get('/projects/:id', getProject(req, res));


//Routes:
//Public:
//root
  //GET: Serve the static content
//auth/login
  //POST: Send login credentials, return error or success
//
//Restricted:
//projects
  //GET: Return list of projects
    //https://iotile.cloud/api/v1/project/
//projects/<project name>
  //GET: Return project page
    // https://iotile.cloud/api/v1/project/<project-id>/


//Pages:
//auth.js - Handle login
  //login()
  //checkToken()
//projects.js - Utility functions for the project api
  //getProjects()
  //getProject()
//data.js - Get and parse data
  //getData()
  //parseData()

//React:
//Components:
//App
  //If logged in:
    //Display Content component
  //Else
    //Display Login component
//Login
//Content
//  ProjectList (Dropdown menu)
//    Project (Menu item)
//  ProjectData

//State:
//Login token
//List of projects?
//Current project?
//Data time range?