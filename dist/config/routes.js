/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');

const usersController = require('../controllers/users');

function authenticateUser(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.route('/')
      .get(usersController.getLanding);

router.route('/register')
      .post(usersController.postRegister);

router.route('/login')
      .post(usersController.postLogin);

router.route('/differentiate')
      .get(usersController.differentiateUser);

module.exports = router;
