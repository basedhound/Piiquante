//*====================================================
//*================= SAUCE CONTROLLER =================
//*====================================================

//! Base
// Importer modèle
const Sauce = require('../models/Sauce');


//! Extra
// Importer File System de Node.js
const fs = require('fs')
// = Si on supprime une annonce, l'image stockée est également supprimée


//! Controllers

// POST => Publier une sauce (/api/sauces)
exports.createSauce = (req, res, next) => {
    /* Pour ajouter un fichier à la requête, le front-end doit envoyer les données de la requête sous la forme form-data et non sous forme de JSON. Le corps de la requête contient une chaîne thing, qui est simplement un objetThing converti en chaîne. Nous devons donc l'analyser à l'aide de JSON.parse() pour obtenir un objet utilisable. */
    const sauceObject = JSON.parse(req.body.sauce);
    // Supprimer champ _id/_userId de la requête client = Ne jamais faire confiance au client
    delete sauceObject._id;
    // Créer un nouvel objet après suppression
    const sauce = new Sauce({
        ...sauceObject,
        // Récupérer userId extrait du token par le middleware d'authentification
        userId: req.auth.userId,
        // Résoudre url complète de notre image
        imageUrl: `${req.protocol}://${req.get('host')}/public/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [' '],
        usersDisliked: [' ']
        // 1. "req.protocol" = http (dans notre cas)
        // 2. req.get('host) = hôte server (localhost:xxxx)
        // 3. '/images/' = Dossier image
        // 4. req.file.filename = Nom du fichier
    });
    // Enregistrer dans database
    sauce.save()
        .then(() => { res.status(201).json({ message: 'Sauce ajoutée !' }) })
        .catch(error => { res.status(400).json({ error }) })
};
/* En fait, nous effectuons une demande GET vers  http://localhost:3000/images/<image-name>.jpg. 
Cela semble simple, mais n'oubliez pas que notre application s'exécute sur localhost:3000 et nous ne lui avons pas indiqué comment répondre aux requêtes transmises à cette route : elle renvoie donc une erreur 404. Pour remédier à cela, nous devons indiquer à notre app.js comment traiter les requêtes vers la route /image, en rendant notre dossier images statique.
Penser à ajouter la route image dans "app.js"
[IMPORT] const path = require('path'); 
[MIDDLEWARE] app.use('/images', express.static(path.join(__dirname, 'image')));*/

// GET => Afficher toutes les sauces (/api/sauces)
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
}

// GET => Afficher une sauce en particulier (/api/sauces/:id)
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
}

// PUT => Modifier une sauce (/api/sauces/:id)
exports.modifySauce = (req, res, next) => {
    // On crée un objet sauceObject qui regarde si req.file existe ou non (si il y a un fichier joint)
    const sauceObject = req.file ? {
        // S'il existe, on traite la nouvelle image (On parse le 'string' + génère url image)
        // JSON.parse() transforme un objet stringifié en Object JavaScript exploitable
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/public/images/${req.file.filename}`
        // S'il n'existe pas, on traite simplement l'objet entrant (string)
    } : { ...req.body };
    // (sécurité) Supprimer champ _id/_userId de la requête client = Ne jamais faire confiance au client
    delete sauceObject._userId;
    // Cherche élément dans database
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            // Vérifier que l'utilisateur qui modifie est propriétaire
            // Si l'userId database et différent de userId de la requête
            if (sauce.userId != req.auth.userId) {
                // Annulation de la requête 
                res.status(401).json({ message: 'Not authorized' });
                // Si bon utilisateur
            } else {
                // Mettre à jour élément 
                // Quel est l'enregistrement à mettre à jour ? = { _id: req.params.id }
                // Avec quel objet ? = { ...thingObject, _id: req.params.id } (thingObject récupéré de notre fonction + userId des paramètres)
                Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

// DELETE => Supprimer une sauce (/api/sauces/:id)
exports.deleteSauce = (req, res, next) => {
    // Cherche élément dans database
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            // ID que nous recevons comme paramètre pour accéder au Thing correspond-t'il avec la base de données ?
            // Vérifier si l’utilisateur qui a fait la requête de suppression est bien celui qui a créé le Thing.
            // Si l'userId database et différent de userId de la requête.
            if (sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-autorisé' })
            } else {
                // SPLIT : Utiliser le fait notre URL d'image contient un segment /images/ pour séparer le nom de fichier. 
                const filename = sauce.imageUrl.split('/public/images/')[1];
                // Utiliser fonction unlink du package fs pour supprimer ce fichier ;
                // en lui passant le fichier à supprimer et le callback à exécuter une fois ce fichier supprimé.
                fs.unlink(`public/images/${filename}`, () => {
                    // Dans le callback, implémenter la logique d'origine en supprimant le Thing de la base de données.
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

// POST => Liker / Disliker une sauce (/api/sauces/:id/like)
exports.likeSauce = (req, res, next) => {
    if (req.body.like == 1) {
        Sauce.updateOne(
            { _id: req.params.id },
            {
                $push: { usersLiked: req.body.userId },
                $inc: { likes: +1 }
            }
        )
            .then(() => res.status(200).json({ message: 'Sauce likée !' }))
            .catch(error => res.status(400).json({ error }));
    }

    if (req.body.like == 0) {
        Sauce.findOne({ _id: req.params.id })
            .then((sauce) => {
                if (sauce.usersLiked.includes(req.body.userId)) {
                    Sauce.updateOne(
                        { _id: req.params.id },
                        {
                            $pull: { usersLiked: req.body.userId },
                            $inc: { likes: -1 }
                        }
                    )
                        .then(() => res.status(200).json({ message: 'Cette sauce ne vous intéresse plus !' }))
                        .catch(error => res.status(400).json({ error }));
                }
                if (sauce.usersDisliked.includes(req.body.userId)) {
                    Sauce.updateOne(
                        { _id: req.params.id },
                        {
                            $pull: { usersDisliked: req.body.userId },
                            $inc: { dislikes: -1 }
                        }
                    )
                        .then(() => res.status(200).json({ message: 'Cette sauce ne vous intéresse plus !' }))
                        .catch(error => res.status(400).json({ error }));
                }
            })
            .catch(error => res.status(400).json({ error }));
    }

    if (req.body.like == -1) {
        Sauce.updateOne(
            { _id: req.params.id },
            {
                $push: { usersDisliked: req.body.userId },
                $inc: { dislikes: +1 }
            }
        )
            .then(() => res.status(200).json({ message: 'Sauce dislikée !' }))
            .catch(error => res.status(400).json({ error }));
        console.log('Sauce dislikée !');
    }
    console.log(req.body);
};

