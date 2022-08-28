//========================================================
//=============== MULTER IMAGES - MIDDLEWARE =============
//========================================================

//* Import Multer : Package gestion de fichiers
const multer = require('multer');

//* Dictionnaire Mime-types (extensions)
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//* Objet de configuration
// .diskStorage() configure : (1) Dossier de réception (2) Nom du fichier
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Callback (null = pas d'erreur) | Dossier de réception
        callback(null, './public/images');
    },
    filename: (req, file, callback) => {
        // Configurer (nouveau) nom du fichier
        // Remplacer les " " (espaces) par des "_" (underscores) :
        const name = file.originalname.split(' ').join('_');
        // Ajouter une extension à partir du "mimetype"
        const extension = MIME_TYPES[file.mimetype];
        // Callback (null = pas d'erreur) | name + timestamp (milliseconde = unique) + '.' + extension
        callback(null, name + Date.now() + '.' + extension);
    }
});

//* Exports
// (Ajouter aux routes/sauce.js pour enregistrer images au système de fichier du serveur)
module.exports = multer({ storage }).single('image');
// = Appel multer({ notre objet storage }) | Méthode .single('image') = Fichier unique/image
