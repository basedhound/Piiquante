//*============================================
//*=============== DEPENDENCIES ===============
//*============================================

// Importer Dotenv
require("dotenv").config();
// console.log(process.env) 

// Importer Cors
const cors = require("cors");


//*============================================
//*================= EXPRESS ==================
//*============================================
// Importer Express
const express = require('express');
// Déclarer Application
const app = express();

// Gestion des Ports
normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) { return val; }
    if (port >= 0) { return port; }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');

// Gestion des Erreurs (1) Fonction
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
// Gestion des Erreurs (2) Méthode
app.on('error', errorHandler);
app.on('listening', () => {
    const address = app.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// Lancement
app.listen(port, () => {
    console.log(`Test app listening on port ${port}`);
});

// Test http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//*============================================
//*================= IMPORTS ==================
//*============================================

// Database => Connexion
const mongoose = require("./services/database");

// Routes Utilisateur
const userRoutes = require('./routes/user')
// Appel dans middleware app.js

// Routes Sauce
// const sauceRoutes = require('./routes/sauce')
// Appel dans middleware app.js

// Accès Path du serveur pour Multer (images)
const path = require('path')
// + (plus bas, dans middleware) Ajout routage : app.use('/images', express.static(path.join(__dirname, 'images')));

//*==============================================
//*================= MIDDLEWARE =================
//*==============================================

//* Appel package Cors
app.use(cors()) 

//* Appel Express Parser
app.use(express.json()) 

//* Call IMAGES : stuff.js (gestion images pour requête POST)
app.use('/public/images', express.static(path.join(__dirname, 'images')))
// express.static()  et  path.join() : Configurez votre serveur pour renvoyer des fichiers statiques pour une route donnée

//* Appel USER routeur (routes/user.js) | Ajout "auth" à la route (middleware/auth)
app.use(userRoutes);


















//! EXPORT APP
module.exports = app;