//? Imports - Librairie :
require("dotenv").config(); // Dotenv (Sécurité)
const express = require("express"); // Express
const helmet = require("helmet"); // Helmet (Sécurité)
const path = require("path"); // Accès path serveur (route /images pour Multer)
// const cors = require("cors"); // Headers HTTP

//? Imports - Code :
require("./services/database"); // Database (connexion)
const userRouter = require("./routes/user"); // Routes User
const sauceRouter = require("./routes/sauce"); // Routes Sauce
const { port, errorHandler } = require("./config"); // Config : Port, Erreurs

//? Express :
const app = express(); // Application Express

//? Config : Port, Erreurs
app.on("error", errorHandler);
app.on("listening", () => {
   const address = app.address();
   const bind =
      typeof address === "string" ? "pipe " + address : "port " + port;
   console.log("Listening on " + bind);
});

// Test Serveur
/* app.get('/', (req, res) => {
res.send(`Test : Listening on port ${port}`)
}) */

// ? Middleware :
// Helmet : Protège l'application de certaines vulnérabilités en configurant de manière appropriée des headers HTTP
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));
// Paramétrage des headers HTTP :
app.use((req, res, next) => {
   // Accéder à notre API depuis n'importe quelle origine
   res.setHeader("Access-Control-Allow-Origin", "*");
   // Ajouter les headers mentionnés aux requêtes envoyées vers notre API
   res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
   );
   // Envoyer des requêtes avec les méthodes mentionnées
   res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
   );
   next();
});

//? Parser : Analyse le corps d'une requête HTTP, assemble les données, crée un objet body exploitable
app.use(express.json());

//? Servir des fichiers statiques (images...)
app.use(
   "/public/images",
   express.static(path.join(__dirname, "/public/images"))
);

//? Routes
app.use(userRouter); // Routeur User
app.use(sauceRouter); // Routes Sauce

//? Lancement :
app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});

//? Exports :
module.exports = app;
