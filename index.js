const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

const staticOptions = {
  maxAge: '7d',
};
app.use(express.static(path.join(__dirname, 'public'), staticOptions));

const router = require('./app/routers/router');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
