/**
 * Le fichier app.js a pour mission de créer une application express pour gérer les requêtes et les réponses du serveur
 */
//j'importe le package express
const express = require('express');

//j'importe la route d'accueil
const accueilRoute = require('./routes/accueilRoute');

//j'importe la route d'authentification
const authRoute = require('./routes/authentificationRoute');

//je crée une application express
const app = express();

//je configure l'application pour utiliser le moteur de template ejs et pour trouver les vues dans le dossier "views"
app.set("views", "./views");

//je configure l'application pour utiliser le moteur de template ejs
app.set("view engine", "ejs");



//j'utilise la route d'accueil pour gérer les requêtes et les réponses de la page d'accueil
app.use("/", accueilRoute);

//j'utilise la route d'authentification pour gérer les requêtes et les réponses de la page d'authentification
app.use("/", authRoute);




//j'exporte l'application pour pouvoir l'utiliser dans le fichier serveur.js
module.exports = app;