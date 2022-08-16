//*===============================================
//*================= SAUCE ROUTES ================
//*===============================================

//! Base
// Importer Express
const express = require('express');

// Declarer Router
const sauceRouter = express.Router();

// Importer Controller
const sauceController = require('../controllers/sauce')

//! Extra
// Importer Authentification (middleware)
const auth = require('../middleware/auth')

// Importer Multer config (middleware)
const multer = require('../middleware/multer-config')

//! Routes

// POST => Publier une sauce (/api/sauces)
sauceRouter.post('/api/sauces', auth, multer, sauceController.createSauce)

// GET => Afficher toutes les sauces (/api/sauces)
sauceRouter.get('/api/sauces', auth, multer, sauceController.getAllSauces)

// GET => Afficher une sauce en particulier (/api/sauces/:id)
sauceRouter.get('/api/sauces/:id', auth, multer, sauceController.getOneSauce)

// PUT => Modifier une sauce (/api/sauces/:id)
sauceRouter.put('/api/sauces/:id', auth, multer, sauceController.modifySauce)

// DELETE => Supprimer une sauce (/api/sauces/:id)
sauceRouter.delete('/api/sauces/:id', auth, multer, sauceController.deleteSauce)

// POST => Liker / Disliker une sauce (/api/sauces/:id/like)
sauceRouter.post('/api/sauces/:id/like', auth, multer, sauceController.likeSauce)

//! Export
module.exports = sauceRouter;