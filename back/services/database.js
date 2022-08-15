
//*===============================================
//*================== DATABASE ===================
//*===============================================

// 1. Installer Mongoose : "npm install mongoose"
// 2. Déclarer Mongoose :
const mongoose = require("mongoose");

// 2. Declarer variables d'environnement (sécurité)
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const cluster = process.env.DBCLUSTER
const database = process.env.DATABASE;

// 3. Déclarer adresse database
const uri = `mongodb+srv://${username}:${password}@${cluster}.zdqnwhr.mongodb.net/${database}?retryWrites=true&w=majority`;

// 4. Connexion à la database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.error('Connexion à MongoDB échouée !', err));

    // 5.Exporter Mongoose
module.exports = { mongoose: mongoose }; // common syntax
// module.exports = {mongoose} // destructured syntax