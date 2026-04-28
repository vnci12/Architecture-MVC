/**
 * le fichier authentificationContreller.js a pour mission de tracer les routes pour ;
 * enregistrer ou créer un copmte utilisateur
 * se connecter ou s'authentifier avec un compte utilisateur
 */

//j'importe le package express
const express = require('express');

//je cree une const pour l'authentificationController
const authentificationController = require('../contrellers/authentificationContreller');

const userController = require("../contrellers/userController")


//je crée un router pour tracer les routes
const router = express.Router();

router.get("/registre", authentificationController.registreView);

router.post("/registre", authentificationController.registerUser);

router.post("/registre", userController.create);

router.get("/User/:id", userController.findOne);

//recupere tout les utilisateurs 
router.get("/User", userController.findAll);

router.delete("/User/:id", userController.delete);

router.delete("/User", userController.deleteAll);

router.put("/User/:id", userController.update)

//j'exporte le "router" pour le rendre accessible dans le fichier l'application
module.exports = router;