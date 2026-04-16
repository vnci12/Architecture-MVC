/**
 * le fichier accueilRoute.js a pour mission de tracer les routes qui mènent a la vue
 */

const express = require('express');

const router = express.Router();

const accueilController = require('../contrellers/accueilContreller');

//je crée une route pour la page d'accueil exemple : 3009
router.get("/accueil", accueilController.accueilView);


module.exports = router;