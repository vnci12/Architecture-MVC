/**
 * Le fichier app.js a pour mission de créer une application express pour gérer les requêtes et les réponses du serveur
 */
//j'importe le package express
const express = require('express');

//j'importe mysql2 pour la connexion à la base de données
const mysql2 = require('mysql2');

//j'importe le piloye express-myconnection pour gérer la connexion à la base de données
const myConnection = require('express-myconnection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//j'importe la route d'accueil
const accueilRoute = require('./routes/accueilRoute');

//j'importe la route d'authentification
const authRoute = require('./routes/authentificationRoute');

const db = require("./models")

//je configure l'application pour utiliser le moteur de template ejs et pour trouver les vues dans le dossier "views"
app.set("views", "./views");

//je configure l'application pour utiliser le moteur de template ejs
app.set("view engine", "ejs");

//je configure l'application pour servir les fichiers statiques dans le dossier "public"
app.use(express.static("public"));
//je configure l'application pour parser les données envoyées par les formulaires
app.use(express.urlencoded({ extended: false }));


//je configure la connexion à la base de données
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "Bouboule97615#",
    database: "maygourmet",
    port: 3306
};

//je configure l'application pour utiliser le piloye express-myconnection pour gérer la connexion à la base de données
app.use(myConnection(mysql2, dbConfig, "pool"));

//j'utilise la route d'accueil pour gérer les requêtes et les réponses de la page d'accueil
app.use("/", accueilRoute);

//j'utilise la route d'authentification pour gérer les requêtes et les réponses de la page d'authentification
app.use("/", authRoute);



//j'exporte l'application pour pouvoir l'utiliser dans le fichier serveur.js
module.exports = app;