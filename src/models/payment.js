const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  type: String,
  cpf: Number,
  credit_card: {
    holder_name: String,
    number: Number,
    expiration_date: String,
    cvv: Number
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer'
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  status: Boolean
});

module.exports = mongoose.model('Payment', paymentSchema);