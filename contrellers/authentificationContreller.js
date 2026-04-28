/**
 * Le fichier authentificationRoute.js a pour mission de créer les routes pour la page d'authentification
 */

const e = require("express");

module.exports = {
    registreView:(req, res) => {
        res.render('registre');
    },

    registerUser: async (req, res) => {
        console.log("#### Controller registerUser ####");

        console.log("#### Contreler - re : ", req.body);

        const emailUser = req.body.email;
        const passwordUser = req.body.motdepasse;

        console.log("#### Contreler - email : ", emailUser);
        console.log("#### Contreler - motdepasse : ", passwordUser);

        if (!emailUser || !passwordUser) {
            return res.render("registre", { error: "Veuillez remplir tous les champs." });
        }

        let requeteSQL = "INSERT INTO user (id, email, password) VALUES (?, ?, ?)";

        let ordreDonnees = [null, emailUser, passwordUser];

        req.getConnection((err, connexion) => {
            if (err) {
                console.error("Erreur de connexion à la base de données : ", err);  
            } else {
                connexion.query(requeteSQL, ordreDonnees, (err, nouvelUtilisateur) => {
                    if (err) {
                        console.log("Erreur lors de l'insertion de l'utilisateur : ", err);
                    } else {
                        console.log("Nouvel utilisateur créé : ", nouvelUtilisateur);
                        res.redirect("/");
                    }
                });
            }
        });
    }
};