const request = require('request');
module.exports.login = (username, password) => {
  const options = {
    uri: 'https://iotile.cloud/api/v1/auth/api-jwt-auth/',
    json: true,
    body: {
      username: username,
      password: password
    }
  };

  const callback = (err, res, body) => {
    module.exports.token = body;
    console.log(module.exports.token);
  };

  return new Promise((resolve, reject) => {
    request.post(options, (err, res, body) => {
      if (err) {
        reject([err, res, body]);
      } else {
        resolve(body);
      }
    });
  });
};
