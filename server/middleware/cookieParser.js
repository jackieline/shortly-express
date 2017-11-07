const parseCookies = (req, res, next) => {
  //Itereate through all keys in headers obj
  //If headerKey contains string called 'cookie'
  //Push that property into an array  
  if (req.headers.cookie) {
    var cookiesStr = req.headers.cookie;
    var cookiesSemi = cookiesStr.split('; ');
    for (let i = 0; i < cookiesSemi.length; i++) {
      var cookiesSplit = cookiesSemi[i].split('=');
      req.cookies[cookiesSplit[0]] = cookiesSplit[1];
    }
  }
  next();
  
  //Believe this takes the request blob
  //Then looks for the "cookie parts"
  //Creates a new key called cookies on that req object
  //Assigns the parts into the cookies property
};

module.exports = parseCookies;