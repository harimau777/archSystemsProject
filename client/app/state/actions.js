const setToken = (token) => {return {type: 'setToken', token: token}};
const setCurrentTab = (tab) => {return {type: 'setCurrentTab', currentTab: tab}};
const setProjects = (projects) => {return {type: 'setProjects', projects: projects}};
const setCurrentProject = (project) => {return {type: 'setCurrentProject', currentProject: project}};
const setStreams = (streams) => {return {type: 'setStreams', streams: streams}};
const setCurrentStream = (stream) => {return {type: 'setCurrentStream', currentStream: stream}};
const setData = (data) => {return {type: 'setData', data: data}};

//Thunks:
function login() {
  return (dispatch) => {
    const username = $('input[name="username"]').val();
    const password = $('input[name="password"]').val();
    $.ajax('https://iotile.cloud/api/v1/auth/api-jwt-auth/', {
      data: {username: username, password: password},
      method: "POST",
      success: (data, status) => {
        dispatch(getProjects(data.token));
        dispatch(setToken(data.token));
      },
      error: (request, error) => {console.log(error)}
    });
  };
}

function getProjects(token) {
  return (dispatch) => {
    $.ajax('https://iotile.cloud/api/v1/project/', {
      headers: {Authorization: `JWT ${token}`},
      method: "GET",
      success: (data, status) => {
        dispatch(setProjects(data.results));
      },
      error: (request, error) => {console.log(error)}
    });
  };
};

const getStreams = (token, currentProject) => {
  return (dispatch) => {
    $.ajax(`https://iotile.cloud/api/v1/stream/?project=${currentProject}`, {
      headers: {Authorization: `JWT ${token}`},
      method: "GET",
      success: (data, status) => {
        dispatch(setStreams(data.results));
      },
      error: (request, error) => {console.log(error)}
    });
  };
};

const getData = (token, slug) => {
  return (dispatch) => {
    $.ajax(`https://iotile.cloud/api/v1/stream/${slug}/data/`, {
      headers: {Authorization: `JWT ${token}`},
      method: "GET",
      success: (data, status) => {
        dispatch(setData(data.results));
      },
      error: (request, error) => {console.log(error)}
    });
  };
};

export {setToken, setCurrentTab, setProjects, setCurrentProject, setStreams, setCurrentStream, setData};
export {login, getProjects, getStreams, getData};
