const express = require('express');
const app = express();
const salleRoute = express.Router();
// Salle model
let Salle = require('../models/Salle');
// Add salle
salleRoute.route('/createSalle').post((req, res, next) => {
  Salle.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All salles
salleRoute.route('/allSalle').get((req, res) => {
  Salle.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single salle
salleRoute.route('/oneSalle/:id').get((req, res) => {
  Salle.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update salle
salleRoute.route('/update_Salle/:id').put((req, res, next) => {
  Salle.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete salle
salleRoute.route('/deleteSalle/:id').delete((req, res, next) => {
  Salle.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = salleRoute;