
// pour plus tard const articles = require('../data/articles.json');

// controller de base pour preparer le remplissage dynamique ert les pages plants
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