const mongoose = require('mongoose');
const config = require('../config/index.js');
const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = Promise;

let count = 0;
let db = null;

mongoose.set('debug', config.env === 'development');

let connect = () => {
  mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
  db = mongoose.connection;
  autoIncrement.initialize(db);
  db.on('error', (err) => {
    console.log(`mongoose err:${err}`);
  });

  db.once('open', () => {
    console.log(`connect ${config.dbUrl} successful!`);
  });
  db.on('disconnected', () => {
    if (count < 3) {
      connect();
      count++;
    } else {
      throw new Error(`数据库挂了,少年快去修吧。`);
    }
  });
};

module.exports = connect;
