const Express = require('express');
const app = new Express();
const compression = require('compression');

const login = require('./login.js').login;
const getProjects = require('./projects.js').getProjects;

login('user1@test.com', 'user.1')
.then(({token}) => getProjects(token))
  .then(({results}) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  })
.catch((err) => {
  console.log(err);
});

//Middleware:
// app.use(compression());

//Routing:
// app.use(express.static('../client/public'));
// app.post('/login', login(req, res));
// app.get('/projects', getProjectList(req, res));
// app.get('/projects/:id', getProject(req, res));


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