var express = require('express');
var router = express.Router();

const{login, register, processRegister, processLogin, logout}=require('../controllers/usersController');
const registerValidation = require("../validations/registerValidation")
const loginValidation = require("../validations/loginValidation")

router
  .get('/register', register)
  .post('/register', registerValidation , processRegister)
  .get('/login',login)
  .post('/login', loginValidation, processLogin)
  .get('/logout', logout)
module.exports = router;




