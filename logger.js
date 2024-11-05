var url = 'http://myvlogger.io/log';

function log(message) {
  //send http request
  console.log(message);
}

module.exports.log = log;
