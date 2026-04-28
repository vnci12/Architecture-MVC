// Ce fichier est utilisé pour configurer la connexion à la base de données et pour importer les modèles Sequelize.
const dbConfig = require('../config/db.config');

// J'importe Sequelize pour créer une instance de connexion à la base de données
const Sequelize = require('sequelize');
// const sequelize = require('../db');

// Je crée une instance de Sequelize pour se connecter à la base de données en utilisant les informations de dbConfig
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }

    }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User')(sequelize, Sequelize);

module.exports = db;