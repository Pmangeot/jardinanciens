const express = require('express');

const app = express();
const PORT = 3000;

const staticOptions = {
  maxAge: '7d',
};
app.use('/static', express.static('public', staticOptions));

const router = require('./app/routers/router');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
