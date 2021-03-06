 /*
 * This module will control the overall functionality of google authentication process flow
 */
const passport = require('passport');
const users = require('../users/users.entity');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const superSecret = require('../../config/config.js');

// this function is to encode the data provided by google into JWT using a secret keyword
const googleCallback = function(user) {
    const token = jwt.sign(user, superSecret.JWT_AUTH.secret);
    return token;
};

// this function is to authenticate user actions by passing token, decoding it and matching with the database
const authenticatePage = function(token) {
    try {
        console.log("inside callback");
      const user = jwtDecode(token);
      const promise = new Promise(function(resolve, reject) {
          // checking for the existence of user data in database mongodb
          users.findOne({
              username: user._doc.username
          }, function(err, user) {
              if (err) {
                  reject(err);
              }
              if (!user) {
                  reject({
                      error: 'No such user exist'
                  });
              }
              resolve(user);
          });
      });
      return promise;
    } catch (e) {
      const promise = new Promise(function(resolve, reject) {
        reject(e);
      });
      return promise;
    } finally {

    }

};
module.exports = {
    googleCallback: googleCallback,
    authenticatePage: authenticatePage
};
