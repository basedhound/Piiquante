//*==============================================
//*================ SAUCE MODEL =================
//*==============================================

// Importer Mongoose
const mongoose = require('mongoose');

// Créer un schema pour nos utilisateurs
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true},
    name: { type: String, required: true},
    manufacturer: { type: String, required: true},
    description: { type: String, required: true},
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true},
    heat: { type: Number, required: true},
    likes: { type: Number, required: true},
    dislikes: { type: Number, required: true},
    usersLiked: { type: [String], required: true},
    usersDisliked: { type: [String], required: true},  
});


// Exporter le modèle terminé
module.exports = mongoose.model('Sauce', sauceSchema);

