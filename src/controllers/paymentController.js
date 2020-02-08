const Payment = require('../models/payment');
const Client = require('../models/client');
const Buyer = require('../models/buyer');

const createBoleto = () => {
  var result = '';
  const characters = '0123456789';
  for ( let i = 0; i < 48; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 10));
  }
  return result;
};

module.exports = {
  async store(request, response){
    const { amount, type, credit_card, client_id, buyer_id } = request.body;

    if (type === 'boleto') {
         
      const createPayment = await Payment.create({
        amount,
        type,
        buyer: buyer_id,
        client: client_id,
        status: false
      });

      return response.status(201).json({ createPayment, boleto_number: createBoleto() });

    } else {

      const payment = await Payment.create({
        amount,
        type,
        credit_card,
        buyer: buyer_id,
        client: client_id,
        status: true
      });

      return response.status(201).json({ payment, message: 'Payment successfully made!' });
    }
  },

  async show(request, response) {
    const { payment_id } = request.query;

    const payment = await Payment.findOne({ _id: payment_id });
    if (!payment_id)
      return response.status(404).json({ message: 'Payment not found'});

    return response.json(payment);
  },
}