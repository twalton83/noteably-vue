const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const passport = require('passport');

router.get('/', function(req,res){
  console.log('route hit here!')
})

const signupValidation = [
  check('username', 'Please enter a username')
  .exists()
  .bail(),
  check('password', 'Password must be at least 8 characters')
  .isLength({min : 8})
  .exists()
  .bail(),
  check('confirmPass', 'Passwords don\'t match.')
  .exists()
  .custom((value, {req})=> value === req.body.password)
]

router.post('/signup', signupValidation, function(req, res, next){
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.redirect('/')
  } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
          if (err){
          res.json(err)
          } else {
          const user = new User({
              username: req.body.username,
              password: hashedPass
          }).save((err) => {
              if (err) {
              return next(err)
              };
              passport.authenticate('local')(req,res, ()=>{
                return res.json({authenticated: true})
              })
          });
          }
      });
  }
})

module.exports = router;
