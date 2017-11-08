const models = require('../models');
const Promise = require('bluebird');
const parseCookies = require('./cookieParser');
//GOAL: SET A NEW COOKIE ON THE RESPONSE WHEN A SESSION IS INITIALIZED
//TODO
  //1 Identify when a session is initialized
  //... check if the cookie matches a pre-existing user
  //2 Generate cookies re-using our pre-existing hashing function
    //3 For the new user


module.exports.createSession = (req, res, next) => {
  req.session = {};
  if (req.cookies) {
    //get req's session id
    models.Sessions.get({id: result.insertId})
      //if req's session id exists
      .then(result => {
        if (req.session.userId) {
          if (req.session.userId !== result.insertId) {
            next();
          }
        //query db for session id
          //store query session id
          //compare stored id against req's session id
            //if they are equal
              //set the req's session to the session
              //call next
            //if they aren't equal
              //USE THE BELOW CODE
              //set the req's session to the newly generated session
              //call next
        }
      });
      //if req's session id does not exist
        //USE THE BELOW CODE
          //set the reqs session to the newly generated session
          //call next
      //USE THE BELOW CODE
  }
  // if (Object.keys(req.session).length === 0) {
  //   models.Sessions.create()
  //     .then(result => {
  //       return models.Sessions.get({id: result.insertId});
  //     })
  //     .then(result => {
  //       req.session = {id: result.id, userId: result.userId, hash: result.hash};
  //       session.cookies['shortlyid'] = result.hash;
  //       next();
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // } else {
  //   req.session = session
  //   next();
  // }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

//check if cookies exist
//check if cookie matches known session
