const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Salle = new Schema({
 
      nom_salle: {
      type: String
   },
   ecran: {
      type: String
   },
   camera: {
      type: String
   },
   chaise: {
      type: String
   },
   table: {
      type: String
   },
}, {
   collection: 'salles'
})
module.exports = mongoose.model('Salle', Salle)