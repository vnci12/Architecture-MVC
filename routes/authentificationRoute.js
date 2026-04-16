/**
 * le fichier authentificationContreller.js a pour mission de tracer les routes pour ;
 * enregistrer ou créer un copmte utilisateur
 * se connecter ou s'authentifier avec un compte utilisateur
 */

//j'importe le package express
const express = require('express');

//je cree une const pour l'authentificationController
const authentificationController = require('../contrellers/authentificationContreller');

//je crée un router pour tracer les routes
const router = express.Router();

router.get("/registre", authentificationController.registreView);

//j'exporte le "router" pour le rendre accessible dans le fichier l'application
module.exports = router;