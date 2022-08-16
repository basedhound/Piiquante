//*==============================================
//*================= USER MODEL =================
//*==============================================

// Importer Mongoose
const mongoose = require('mongoose');

// Déclarer Mongoose unique validator plugin
const uniqueValidator = require('mongoose-unique-validator')

// Créer un schema pour nos utilisateurs
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}     
});

// Appliquer uniqueValidator au userSchema
userSchema.plugin(uniqueValidator)

// Exporter le modèle terminé
module.exports = mongoose.model('User', userSchema);

