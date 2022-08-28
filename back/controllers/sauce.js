//====================================================
//================= SAUCE CONTROLLER =================
//====================================================

//* Imports : 
const Sauce = require('../models/Sauce'); // Modèle Sauce

const fs = require('fs') // File system (Node.js)
// Pour utiliser la fonction "unlink" et supprimer une image stockée localement.


//! Fonctions :

//* Afficher toutes les sauces => GET
exports.getAllSauces = (req, res, next) => {
    // Appliquer méthode "find" à notre modèle Mongoose
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
}

//* Afficher une sauce en particulier => GET
exports.getOneSauce = (req, res, next) => {
    // Appliquer méthode "findOne" à notre modèle + Paramètre id
    Sauce.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
}

//* Publier une sauce => POST
exports.createSauce = (req, res, next) => {
    /* Parser objet requête :
    Si un fichier (image) est ajouté à la requête, le front-end revoie les données en chaîne.*/
    const sauceObject = JSON.parse(req.body.sauce);
    // Supprimer "userId" de la requête (Ne jamais faire confiance à l'utilisateur)
    delete sauceObject.userId;
    // Créer un nouvel objet Sauce
    const sauce = new Sauce({
        ...sauceObject,
        // Récupérer "userId" depuis le Token d'authentification
        userId: req.auth.userId,
        // Générer URL de l'image
        imageUrl: `${req.protocol}://${req.get('host')}/public/images/${req.file.filename}`,
        // Initialiser à 0
        likes: 0,
        dislikes: 0,
        // Initialiser tableaux vides
        usersLiked: [],
        usersDisliked: []
    });
    // Enregistrer dans database
    sauce.save()
        .then(() => { res.status(201).json({ message: 'Sauce ajoutée !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

//* Modifier une sauce => PUT
exports.modifySauce = (req, res, next) => {
    // Objet pour vérifier si il y a un fichier dans notre requête
    const sauceObject = req.file ? {
        // Si oui : Parser objet requête
        ...JSON.parse(req.body.sauce),
        // Générer URL de l'image
        imageUrl: `${req.protocol}://${req.get('host')}/public/images/${req.file.filename}`,
        // Si non : Traiter objet directement (string)
    } : { ...req.body };
    // Supprimer "_userId" de la requête (Ne jamais faire confiance à l'utilisateur)
    delete sauceObject.userId;
    // Chercher correspondance objet en database
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            // Vérifier id utilisateur database/requête(token-auth)
            if (sauce.userId != req.auth.userId) {
                // Mauvais utilisateur : Annuler requête 
                res.status(401).json({ message: 'Not authorized' });
            } else {
                // Bon utilisateur : Si image dans requête, supprimer ancienne image
                if (req.file) {
                    const filename = sauce.imageUrl.split("/images/")[1]
                    fs.unlink(`public/images/${filename}`, () => {
                    })
                }
                // Modifier objet avec contenu requête
                Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

//* Supprimer une sauce => DELETE
exports.deleteSauce = (req, res, next) => {
    // Chercher correspondance objet requête/database
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            // Vérifier correspondance user database/requête(token-auth)
            if (sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-autorisé' })
            } else {
                // Récupérer nom fichier image avec méthode "split"
                const filename = sauce.imageUrl.split('public/images/')[1];
                // Supprimer fichier du serveur avec fonction "unlink" de FS
                fs.unlink(`public/images/${filename}`, () => {
                    // Callback : Supprimer la Sauce de la database
                    Sauce.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
                        .catch(error => res.status(401).json({ error }));
                })
            }
        })
        .catch(err => {
            res.status(500).json({ errror });
        })
}

//* Liker / Disliker une sauce => POST
exports.likeDislikeSauce = (req, res, next) => {
    let like = req.body.like
    let userId = req.body.userId
    let sauceId = req.params.id
    // Utilisation de l'instruction "Switch"
    switch (like) {
        //! Liker une sauce
        case 1:
            // Correspondance Sauce, Ajouter usersId au tableau usersLiked, Incrémenter 1 dans Likes
            Sauce.updateOne({ _id: sauceId }, { $push: { usersLiked: userId }, $inc: { likes: +1 } })
                .then(() => res.status(200).json({ message: `Sauce likée` }))
                .catch((error) => res.status(400).json({ error }))
            break;
        //! Annuler un Like ou un Dislike
        case 0:
            // Trouver correspondance
            Sauce.findOne({ _id: sauceId })
                .then((sauce) => {
                    // 1 - Annulation d'un Like (si user présent dans tableau "usersLiked")
                    if (sauce.usersLiked.includes(userId)) {
                        // Retirer userId du tableau usersLiked, Décrémenter 1 dans Likes
                        Sauce.updateOne({ _id: sauceId }, { $pull: { usersLiked: userId }, $inc: { likes: -1 } })
                            .then(() => res.status(200).json({ message: `Neutre` }))
                            .catch((error) => res.status(400).json({ error }))
                    }
                    // 2 - Annulation d'un Dislike (si user présent dans tableau "usersDisliked")
                    if (sauce.usersDisliked.includes(userId)) {
                        // Retirer userId du tableau usersDisliked, Décrémenter 1 dans Dislikes
                        Sauce.updateOne({ _id: sauceId }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 } })
                            .then(() => res.status(200).json({ message: `Neutre` }))
                            .catch((error) => res.status(400).json({ error }))
                    }
                })
                .catch((error) => res.status(404).json({ error }))
            break;
        //! Disliker une sauce
        case -1:
            // Correspondance Sauce, Ajouter usersId au tableau usersDisliked, Incrémenter 1 dans Dislikes
            Sauce.updateOne({ _id: sauceId }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 } })
                .then(() => { res.status(200).json({ message: `Sauce dislikée` }) })
                .catch((error) => res.status(400).json({ error }))
            break;
            default:
                console.log(error);
    }
}