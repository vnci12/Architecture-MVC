/**
 * user.js est un model qui sert a créer des utilisateurs. Le modele User est de : id, mail et password
 */

//j'importe le package sequelize pour créer le model User
const DataTypes = require('sequelize');

//j'importe la connexion à la base de données
const sequelize = require('../db');

//je crée le model User avec les champs id, mail et password
/**module.exports = sequelize.define(
    'User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);*/

module.exports = (sequelize, Sequelize) => {
	const UserModel = sequelize.define('users', {
		email: {
			type: Sequelize.STRING,
			unique: true
		},
		password: {
			type: Sequelize.STRING
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});

    return UserModel;
};