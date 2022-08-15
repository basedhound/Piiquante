//*===================================================
//*================= USER CONTROLLER =================
//*===================================================

//! Base 
// Importer modèle "User"
const User = require('../models/User');

// (Sécurité) Importer Bcrypt 
const bcrypt = require('bcrypt');

// (Sécurité) Importer JSON-Web-Token
const jwt = require('jsonwebtoken');


//! Fonctions

//* SIGNUP => Créer un nouveau utilisateur
exports.signup = (req, res, next) => {
    // Appel de "bcrypt.hash", fonction qui crypte passwor => sur body.password (mdp user) => 10 fois (tours de cryptages)
    bcrypt.hash(req.body.password, 10)
        // Ensuite, mot de passe dans nouvel utilisateur
        .then(hashedPassword => {
            // Crée un new utilisateur
            const user = new User({
                // Utiliser email fourni dans le corps de la requête
                email: req.body.email,
                // Utiliser email crypté (hashed) créé juste au-dessus
                password: hashedPassword
            });
            // Utiliser fonction "save" de notre "User" pour engistrer dans la base de données
            user.save()
                // 201 = Création de ressources => object.json => message
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                // 500 = Server error (traitement) => to object.json 
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(501).json({ error }));
};

//* LOGIN => Vérifier sur un utilisateur existe + correspondance mot de passe
/*  Maintenant que nous pouvons créer des utilisateurs dans la base de données, 
il nous faut une méthode permettant de vérifier si un utilisateur qui tente de se connecter dispose d'identifiants valides. 
Implémentons donc notre fonction login.*/

// (Sécurité) Importer clé secrète de Json-Web-Token stockée en variable d'environnement (fichier .env)
const jwtKey = process.env.JWTKEY;

exports.login = (req, res, next) => {
    // Utiliser méthode "findOne" de notre modèle User + filtre/selecteur
    User.findOne({ email: req.body.email })
        // Comparer résultat avec database
        .then(user => {
            // Si correspondance nulle
            if (user === null) {
                // Utilisateur n'existe pas = message d'erreur
                res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
            } else {
                // Si utilisateur existe, comparer mdp fourni/database avec "bcrypt.compare"
                // req.body.password = Fourni par utilisateur | user.password = Conservé dans database
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        // Si password est faux => erreur d'authentification
                        if (!valid) {
                            res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' })
                            // Si password est correct => Envoi d'bjet nécessaire à l'authentificaion
                        } else {
                            // Réponse : Renvoyer le token au front-end
                            res.status(200).json({
                                userId: user._id,
                                // Utilier la fonction .sign de jsonwebtoken pour chiffrer un nouveau token.
                                token: jwt.sign(
                                    // Ajouter les arguments :
                                    //#1. Données à encoder dans le Token ("Payload") => ID utilisateur
                                    { userId: user._id },
                                    //#2. Clé secrète pour crypter le Token
                                    jwtKey,
                                    //#3. Définir la durée de validité du Token
                                    { expiresIn: '24h'}
                                )
                            });
                        };
                    })
                    .catch(error => res.status(500).json({ error }))
            };
        })
        .catch(err => res.status(500).json({ error }));
};
