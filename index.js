const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const staticOptions = {
  maxAge: '7d',
};
app.use(express.static(path.join(__dirname, 'public'), staticOptions));

const router = require('./app/routers/router');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
