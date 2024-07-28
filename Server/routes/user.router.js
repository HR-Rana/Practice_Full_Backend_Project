const express = require('express');
const router = express.Router();
const { createUserhandler, userLoginHandler, userUpdateHandler, userDeleteHandler } = require('../controllers/userAuth.controller');


// Create a new user handler
router.post("/user_Register", createUserhandler);

// user login handler  
router.get('/user_Login', userLoginHandler);

// user information update handler 
router.put("/user_Update", userUpdateHandler);


// user account delete handler
router.delete("/user_Delete", userDeleteHandler);



module.exports = router;