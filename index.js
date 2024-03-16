const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Réglage de cache pour les images
const staticOptions = {
  maxAge: '7d',
};

app.use(express.static(path.join(__dirname, 'public'), staticOptions));

const router = require('./app/routers/router');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started at http://127.0.0.1:${PORT}`);
});
