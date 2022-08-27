//===============================================
//================= USER ROUTER =================
//===============================================

//* Imports : 
const express = require('express'); 
const emailValidator = require('../middleware/email-validator')
const passwordValidator = require('../middleware/password-validator') 
const userController = require('../controllers/user') 

//* Routeur : 
// Déclarer routeur User
const userRouter = express.Router();

// POST => Permet à l'utilisateur de créer un compte
userRouter.post('/api/auth/signup', emailValidator, passwordValidator, userController.signup)
// POST => Permet à l'utilisateur de s'identifier
userRouter.post('/api/auth/login', userController.login)

//* Exports : 
module.exports = userRouter;


