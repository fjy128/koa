
let rq = require('request-promise');

let request = function (options) {
  return new Promise((resolve, reject) => {
    rq(options)
      .then(function (data) {
        resolve(data);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}
;

module.exports = request;
