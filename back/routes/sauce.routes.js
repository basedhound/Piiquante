//===============================================
//================= SAUCE ROUTER ================
//===============================================

//* Imports
const express = require('express'); // Express
const auth = require('../middleware/auth') // Authentification (sécurité)
const multer = require('../middleware/multer-config') // Multer (images)
const sauceController = require('../controllers/sauce') // Sauce contrôleur

//* Routeur
const sauceRouter = express.Router(); // Déclarer routeur Sauce

// POST => Publier une sauce (/api/sauces)
sauceRouter.post('/api/sauces', auth, multer, sauceController.createSauce)
// GET => Afficher toutes les sauces (/api/sauces)
sauceRouter.get('/api/sauces', auth, sauceController.getAllSauces)
// GET => Afficher une sauce en particulier (/api/sauces/:id)
sauceRouter.get('/api/sauces/:id', auth, sauceController.getOneSauce)
// PUT => Modifier une sauce (/api/sauces/:id)
sauceRouter.put('/api/sauces/:id', auth, multer, sauceController.modifySauce)
// DELETE => Supprimer une sauce (/api/sauces/:id)
sauceRouter.delete('/api/sauces/:id', auth, sauceController.deleteSauce)
// POST => Liker/Disliker une sauce (/api/sauces/:id/like)
sauceRouter.post('/api/sauces/:id/like', auth, sauceController.likeDislikeSauce)

//* Exports
module.exports = sauceRouter;


