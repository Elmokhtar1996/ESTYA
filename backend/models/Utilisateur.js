const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let Utilisateur = new Schema({
    nom: {
        type: String
     },
     prenom: {
        type: String
     },
     mot_de_pass: {
        type: String
     },
     num_adresse: {
        type: String
     },
     nom_rue: {
      type: String
   },
   code_postale: {
      type: String
   },
   ville: {
      type: String
   },
   pays: {
      type: String
   },
   email: {
      type: String
   },
   tel: {
      type: String
   },
   civilite: {
      type: String
   },
   role: {
      type: String
   }
}, {
    collection: 'Utilisateurs'
})

Utilisateur.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('Utilisateur', Utilisateur)