const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const passport = require('passport');

const signupValidation = [
  check('username', 'Please enter a username')
  .exists()
  .bail(),
  check('password', 'Password must be at least 8 characters')
  .isLength({min : 8})
  .exists()
  .bail(),
  check('passwordConf', 'Passwords don\'t match.')
  .exists()
  .custom((value, {req})=> value === req.body.password)
]

router.post('/signup', signupValidation, function(req, res, next){
  const errors = validationResult(req)
  console.log(errors)
  if(!errors.isEmpty()){
    res.render('sign-up', {errors: errors.array()})
  } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
          if (err){
          res.redirect("/");
          } else {
          const user = new User({
              username: req.body.username,
              password: hashedPass
          }).save((err) => {
              if (err) {
              return next(err)
              };
              passport.authenticate('local')(req,res, ()=>{
                return res.redirect("/")
              })
          });
          }
      });
  }
})

module.exports = router;
