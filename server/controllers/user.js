//* Imports :
// Modèle "User"
const User = require("../models/User");
// Crypto-js (chiffrage email)
const cryptojs = require("crypto-js");
// Bcrypt (hashage password)
const bcrypt = require("bcrypt");
// Json-Web-Token (authentification)
const jwt = require("jsonwebtoken");
// Clé secrète JWT (.env)
const jwtKey = process.env.JWT_KEY;
// Clé secrète Crypto-js (.env)
const cryptojsKey = process.env.CRYPTOJS_KEY;

//* Fonctions :

// Inscription => Créer un nouveau utilisateur
exports.signup = (req, res, next) => {
   // Chiffrer email
   const emailCryptojs = cryptojs.HmacSHA256(req.body.email, cryptojsKey);
   // Hasher password (10 fois)
   bcrypt
      .hash(req.body.password, 10)
      // Transmettre mail/pass à un objet User
      .then((hashedPassword) => {
         // Créer un new utilisateur
         const user = new User({
            email: emailCryptojs,
            password: hashedPassword,
         });
         // Méthode "save" : Engistrer dans la base de données
         user
            .save()
            // 201 = Création de ressources
            .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
            // 500 = Erreur Serveur
            .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(501).json({ error }));
};

// Connexion => Correspondance mail et password
exports.login = (req, res, next) => {
   // Crypter email requête, puis le convertir en string
   const emailCryptojs = cryptojs
      .HmacSHA256(req.body.email, cryptojsKey)
      .toString();
   // Chercher correspondance dans la database (Méthode "findOne")
   User.findOne({ email: emailCryptojs.toString() })
      .then((user) => {
         if (user === null) {
            // Pas de correspondance, échec de la connexion
            res.status(401).json({
               message:
                  "L’adresse e-mail que vous avez saisie n’est associée à aucun compte",
            });
         } else {
            // Si correspondance mail, comparer passwords requête/database (Fonction "compare" de Bcrypt)
            bcrypt
               .compare(req.body.password, user.password)
               .then((valid) => {
                  if (!valid) {
                     // Invalide, échec de la connexion
                     res.status(401).json({
                        message: "Paire identifiant/mot de passe incorrecte",
                     });
                  } else {
                     // Valide, envoi d'un token d'authentification (Méthode "sign")
                     res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                           // Arguments : userId, clé cryptage, durée de validité
                           { userId: user._id },
                           jwtKey,
                           { expiresIn: "24h" }
                        ),
                     });
                  }
               })
               .catch((error) => res.status(500).json({ error }));
         }
      })
      .catch((error) => res.status(501).json({ error }));
};
