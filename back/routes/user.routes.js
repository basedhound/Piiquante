//* Imports :
const express = require("express");
const emailValidator = require("../middleware/email-validator");
const passwordValidator = require("../middleware/password-validator");
const userController = require("../controllers/user");

//* Routeur :
const userRouter = express.Router(); // Déclarer routeur User

// POST => Permet à l'utilisateur de créer un compte
userRouter.post(
   "/api/auth/signup",
   emailValidator,
   passwordValidator,
   userController.signup
);
// POST => Permet à l'utilisateur de s'identifier
userRouter.post("/api/auth/login", userController.login);

//* Exports :
module.exports = userRouter;
