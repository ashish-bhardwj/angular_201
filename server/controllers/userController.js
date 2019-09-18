var express=require('express');
var router=express.Router();
var passport=require('passport');
const jwt = require('jsonwebtoken');


//const {User}=require('../models/user');
const User=require('../models/user');

router.post('/',(req,res)=>{
    var newUser=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
     });
     User.addUser(newUser, (err, user) => {
        if(err){
          res.json({success: false, msg:'Failed to register user'});
        } else {
          res.json({success: true, msg:'User registered'});
        }
      });
    });

 router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    User.getUserByEmail(email, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
      
        if(err) throw err;
        if(isMatch){

          const token = jwt.sign(user.toJSON(), 'SECRET#123', {
            expiresIn: '365d' // 1 week
          });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName:user.lastName,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });

  router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    console.log("profile");
    console.log(req.user);
    res.json({user: req.user});
  });

 module.exports=router;