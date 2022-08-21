//====================================================
//============= USER AUTH - MIDDLEWARE ===============
//====================================================

//* Imports
const jwt = require('jsonwebtoken'); // JSON-Web-Token
const jwtKey = process.env.JWT_KEY; // Clé secrète JWT (.env)

//* Fonction :

module.exports = (req, res, next) => {
    try {
        // Récupérer header "Authorization" + Extraire le Token (split après "bearer")
        const token = req.headers.authorization.split(' ')[1];
        // Décoder le Token : méthode "verify" + arguments(token, clé secrète)
        const decodedToken = jwt.verify(token, jwtKey);
        // Extraire "userId" du token
        const userId = decodedToken.userId;
        // Renseigner "userId" afin que nos routes puissent l’exploiter
        req.auth = {
            userId: userId
        };
        next();
    } catch (error) {
        res.status(403).json({ error })
    }
};
// Après import, ajouter "auth" aux routes Sauce, avant chaque controller. 
