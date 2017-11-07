const models = require('../models');
const Promise = require('bluebird');
const parseCookies = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  console.log('createSession invoked by test!: here\'s the req: ', req);
  var hashed;
  req.session = {};
  var storage = [];
  if (Object.keys(req.session).length === 0) {
    models.Sessions.create()
      .then(result => {
        return models.Sessions.get({id: result.insertId});
      })
      .then(result => {
        req.session = {id: result.id, userId: result.userId, hash: result.hash};
        console.log('Do I exist, really?', req.session);
        next();
      })
      .catch(error => {
        console.error(error);
      });
  }
  console.log('am I filled?', storage);

  //Call session's get
    //Pass in options TODO: grab userId prop from req
    
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

//check if cookies exist
//check if cookie matches known session
