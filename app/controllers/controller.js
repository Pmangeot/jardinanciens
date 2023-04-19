
// pour plus tard const plants = require('../data/plants.json');

// controller de base pour preparer le remplissage dynamique et les pages plants
const controller = {

    homePage(req, res){
        res.render('index');
    },
    
    plantsPage(req, res){
        res.render('plants');
    },

    tipsPage(req, res){
        res.render('tips');
    },

    albumPage(req, res){
        res.render('pictures');
    },

    contactPage(req, res){
        res.render('contact');
    },

    legalPage(req, res){
        res.render('legal');
    }
}

module.exports = controller;