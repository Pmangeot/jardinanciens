//mise en place du router et controller
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

//Routes 
router.get('/', controller.homePage);

router.get('/plants/', controller.plantsPage);

router.get('/conseils/', controller.tipsPage);

router.get('/photos/', controller.albumPage);

router.get('/contact/', controller.contactPage);

router.get('/legal/', controller.legalPage);


//export du mw router
module.exports = router;