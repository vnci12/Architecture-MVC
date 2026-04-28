/**
 * jle fichier serveur.js a pour mission de créer un serveur de l'application
 */

//j'importe le package http
const http = require('http');

//j'importe le fichier app.js
const app = require('./app');

//je déclare une variable app qui importe le fichier app.js
const server = http.createServer(app);

//je déclare une variable port qui contient le port d'écoute du serveur
const numeroPort = 3000;

//je fais écouter le serveur sur le port 3000
server.listen(numeroPort, () => {
    console.log(`Le serveur est à l\'écoute sur le port, ${numeroPort}`);
});