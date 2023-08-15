const express = require('express');

const app = express();
const PORT = 3000;

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
