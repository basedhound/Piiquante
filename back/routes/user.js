//*===============================================
//*================= USER ROUTES =================
//*===============================================

//! Base
// Declarer "Express" :
const express = require('express');

// Declarer Router
const userRouter = express.Router();

// Declare Controller
const userController = require('../controllers/user')

//! Routes
userRouter.post('/api/auth/signup', userController.signup)
userRouter.post('/api/auth/login', userController.login)

//! Exporter Router
module.exports = userRouter;