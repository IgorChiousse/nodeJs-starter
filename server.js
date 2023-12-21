// Import des packages necessaires
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Afficher hello world
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Lancement du serveur
const PORT = process.env.PORT || 5600;

// Définir une fonction pour lancer un serveur
const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Le serveur est lancé sur le port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();