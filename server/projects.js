const request = require('request');

module.exports.getProjects = (token) => {
  const options = {
    uri: 'https://iotile.cloud/api/v1/project/',
    headers: {
      Authorization: `JWT ${token}`
    },
    json: true
  };

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) {
        reject([err, res, body]);
      } else {
        resolve(body);
      }
    });
  });
};

// const getProject = () => {

// };
