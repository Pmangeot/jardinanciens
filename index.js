const express = require('express');

const app = express();
const PORT = 3000;

// Reglage caching headers pour images statiques
const staticOptions = {
  maxAge: '7d', // Cache images de 7 jours
};
app.use('/static', express.static('public', staticOptions));

// reglages ejs dossiers public router
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
const router = require('./app/routers/router');

// lancement du router
app.use(router);

// listener
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
