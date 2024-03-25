/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const plants = require('../models/plants');

// middleware pour les reservations

const reservePlant = (req, res, next) => {
  try {
    const goodName = req.body.goodName;
    const name = req.body.name;
    // Find the selected plant in the plants list and update its stock
    fs.promises.readFile('goods.json', 'utf8')
      .then((data) => JSON.parse(data))
      .then((goods) => {
        let foundGood = null;
        for (const good of goods) {
          if (good.name === goodName) {
            good.stock--;
            foundGood = good;
            break;
          }
        }
        // Save the reservation to a file
        const newReservation = { id: uuidv4(), name, goodName };
        fs.promises.readFile('reservations.json', 'utf8')
          .then((data) => JSON.parse(data))
          .then((reservations) => fs.promises.writeFile(
            'reservations.json',
            JSON.stringify([...reservations, newReservation]),
          ))
          .then(() => {
            res.status(200).send('Reservation saved.');
            next();
          })
          .catch((error) => {
            console.error(`Error occurred: ${error}`);
            res.status(500).send('Internal Server Error');
            next();
          });
      })
      .catch((error) => {
        console.error(`Error occurred: ${error}`);
        res.status(500).send('Internal Server Error');
        next();
      });
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    res.status(500).send('Internal Server Error');
    next();
  }
};

// controller de base pour preparer le remplissage dynamique et les pages plants
const controller = {

  homePage(req, res) {
    res.render('index');
  },

  plantsPage(req, res) {
    res.render('plants', { plants });
  },

  reservation(req, res) {
    reservePlant(req, res, () => {
      res.sendStatus(200);
    });
  },

  tipsPage(req, res) {
    res.render('tips');
  },

  albumPage(req, res) {
    res.render('pictures');
  },

  contactPage(req, res) {
    res.render('contact');
  },

  legalPage(req, res) {
    res.render('legal');
  },
};

module.exports = controller;
