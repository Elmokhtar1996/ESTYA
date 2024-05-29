const express = require('express')
const app = express()
const reservationRoute = express.Router()

// reservation model
let Reservation = require('../models/Reservation')
let User = require('../models/Utilisateur')
let Salle = require('../models/Salle')
const authorize = require('../middlewares/auth')


// Add reservation
reservationRoute.route('/create_reservation').post((req, res, next) => {
    Reservation.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single User
reservationRoute.route('/user-profile/:id').get(authorize, (req, res, next) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})


// Get All reservations
reservationRoute.route('/all_reservation').get((req, res) => {
  Reservation.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Get single reservation
reservationRoute.route('/one_reservation/:id').get((req, res) => {
    Reservation.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update reservation
reservationRoute.route('/update_reservation/:id').put((req, res, next) => {
  Reservation.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body, 
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    },
  )
})
// Get All Users
reservationRoute.route('/all_user').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})// Get All Salle
reservationRoute.route('/all_salle').get((req, res) => {
  Salle.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Utilisateur

// Delete reservation
reservationRoute.route('/delete_reservation/:id').delete((req, res, next) => {
  Reservation.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = reservationRoute
