//*==============================================
//*================= USER ROUTE =================
//*==============================================


//! Base
// Declarer "Express" :
const express = require('express');

// Declarer Router
const userRoutes = express.Router();

// Declare Controller
const userController = require('../controllers/user')

//! Routes
userRoutes.post('/api/auth/signup', userController.signup)
userRoutes.post('/api/auth/login', userController.login)

//! Exporter Router
module.exports = userRoutes;