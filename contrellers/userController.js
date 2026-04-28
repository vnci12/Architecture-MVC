//importe le module 'db' depuis le dossier parent 'module'
const db = require ('../models');

const User = db.user;

const Op = db.Sequelize.Op;


exports.create = (req, res) =>{
    /**
     * je m'assure que le mail et le mot de passe son bien renseignés.
     * Deux conditions à vérifier:
     * 1. si la variable emailUser est vide 
     * OU
     * 2. si la variable passwordUser est vide 
     * ALORS
     * j'arrete la création du compte utilisateur
    */

    //je récupere l'email saisi côter front-end et je la stock dans la variable emailUser.
    const emailUser = req.body.email;

    //je récupere le mot de passe saisi côter front-end et je la stock dans la variable passwordUser.
    const passwordUser = req.body.password;

    //véification des donnée email et mot de passe
    if(!emailUser || !passwordUser){
        res.status(400).send({
            message: "Veuillez compléter les champs."
        });

        return;
    }

    const user ={ 
        email: emailUser,
        password: passwordUser
    };


    User.create(user).then(data => {

        res.send(data);
    }).catch(err => {

        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la création de l'utilisateur."
        });
    });
};

//Méthode pour récuperer un utilisateur particulier grâce a son id (identifiant)
exports.findOne =(req, res) => {
    // je récupere l'id de l'utilisateur, puis je stock l'id dans la variable idUser
    const idUser = req.params.id;

    // je recherche l'utilisateur dans la base de données
    User.findByPk(idUser)
        .then(data => {
            if(data) { //si je trouve l'utilisateur
                res.send(data); //ALORS je renvoie l'utilisateur (data)
            } else { //SINON (l'utilisateur n'existe pas)
                res.status(400).send({
                    message: `L'utilisateur avec l'identifiant ${idUser} n'existe pas.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erreur lors de la recherche de l'utilisateur avec l'identifiant ${idUser}`,
            });
        })
};

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur lors de la récupèration de tous les utilisateurs."
            });
        });
};
// /user/:id
//exemple
exports.delete = (req, res) => {
    const idUser = req.params.id;
    User.destroy({
        where: { id: idUser }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Utilisateur supprimé avec succès."
            });
        } else {
            res.send({
                message: `Impossible de supprimer l'utilisateur avec l'id=${idUser}. Utilisateur non trouvé.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erreur lors de la suppression de l'utilisateur avec l'id=" + idUser + err.message
        });
    });
};

exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
    .then(num => {
        res.send({
            message: `${num} utilisateurs ont été supprimés.`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur lors de la suppression de tous les utilisateurs."
        });
    });
};

exports.update = (req, res) => {
    const idUser = req.params.id;

    User.update(req.body, {
        where: { id: idUser }
    })
    .then(num => {
        if (num == 1 || (Array.isArray(num) && num[0] == 1)) {
            res.send({
                message: "Utilisateur mis à jour avec succès."
            });
        } else {
            res.send({
                message: `Impossible de mettre à jour l'utilisateur avec l'id=${idUser}. Utilisateur non trouvé ou données identiques.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Erreur lors de la mise à jour de l'utilisateur avec l'id=${idUser}`
        });
    });
};