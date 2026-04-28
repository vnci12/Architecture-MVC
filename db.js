/**
 * Permet à Sequelize de se connecter à la base de données
 */

//j'importe le package Sequelize pour la connexion à la base de données
const Sequelize = require("sequelize");

//je crée une instance de Sequelize pour se connecter à la base de données "maygourmet" avec l'utilisateur "root" et le mot de passe "Bouboule97615#"
const sequelize = new Sequelize(
    "maygourmet",
    "root",
    "Bouboule97615#",
    {
        host: "localhost",
        dialect: "mysql"
    }

);

//j'exporte l'instance de Sequelize pour pouvoir l'utiliser dans les autres fichiers
module.exports = sequelize;