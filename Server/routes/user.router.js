const express = require('express');
const router = require('router');
const { createUserhandler, userLoginHandler, userUpdateHandler, userDeleteHandler } = require('../controllers/userAuth.controller');


// Create a new user handler
router.post("userRegister", createUserhandler);

// user login handler  
router.get('/userLogin', userLoginHandler);

// user information update handler 
router.put("/userUpdate", userUpdateHandler);


// user account delete handler
router.delete("/userDelete", userDeleteHandler);