const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: Number
});

module.exports = mongoose.model('Buyer', buyerSchema);