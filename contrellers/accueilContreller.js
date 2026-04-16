/**
 * Ce fichier et un controller qui a pour mission de gérer les requêtes et les réponses pour la page d'accueil de l'application
 * Dans ce fichier, je vais créer les routes pour la page 'accueil.ejs'
 */

module.exports = {
    accueilView:(req, res) => {
        res.render('accueil');
    }
};