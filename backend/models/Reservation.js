const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Reservation = new Schema({
   dateheure_debut: {
      type: String
   },
   dateheure_fin: {
      type: String
   },
   utilisateur_id: {
      type: String
   },
   salle_id: {
      type: String
   },
  

}, {
   collection: 'reservations'
})

module.exports = mongoose.model('Reservation', Reservation)