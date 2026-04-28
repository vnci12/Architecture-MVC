module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Bouboule97615#",
    DB: "maygourmet",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/**
 * Les paramètres HOST USER PASSWORD DB et dialect sont utilisés pour se connecter à MySQL.
 * Le paramètre pool est utilisé pour Sequelize:
 * max: le nombre maximum de connexions dans le pool
 * min: le nombre minimum de connexions dans le pool
 * acquire: le temps maximum (en millisecondes) que le pool essaiera de se connecter avant de générer une erreur
 * idle: le temps maximum (en millisecondes) que les connexions peuvent rester inactives avant d'être fermées
 */