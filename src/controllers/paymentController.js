const Payment = require('../models/payment');
const Client = require('../models/client');
const Buyer = require('../models/buyer');

const { validatePaymentInfo,
        validateCreditCardInfo 
} = require('./utils/controllerValidation');

const createBoleto = () => {
  var result = '';
  const characters = '0123456789';
  for ( let i = 0; i < 48; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 10));
  }
  return result;
};

const checkIfBuyerAndClientExist = async (buyer_id, client_id) => {
  const buyer = await Buyer.findById(buyer_id);
  if (!buyer)
    return { exists: false, status: 404, message: 'Buyer not found!' };

  const client = await Client.findById(client_id);
  if (!client)
    return { exists: false, status: 404, message: 'Client not found!' };
 
  return { exists: true };
};
       
module.exports = {
  async store(request, response){
    const { amount, type, credit_card, client_id, buyer_id } = request.body;

    const paymentInfo = await validatePaymentInfo(amount, type);
    if(paymentInfo.invalid)
      return response.status(paymentInfo.status).json(paymentInfo.message);

    if (type === 'boleto') {
      const buyerAndClient = await checkIfBuyerAndClientExist(buyer_id, client_id);
      if(!buyerAndClient.exists) {
        return response.status(buyerAndClient.status).json(buyerAndClient.message);
      }
         
      const createPayment = await Payment.create({
        amount,
        type,
        buyer: buyer_id,
        client: client_id,
        status: false
      });

      return response.status(201).json({ createPayment, boleto_number: createBoleto() });

    } else {
      const creditInfo = await validateCreditCardInfo(credit_card);
      if(creditInfo.invalid)
        return response.status(creditInfo.status).json(creditInfo.message);
      
      const buyerAndClient = await checkIfBuyerAndClientExist(buyer_id, client_id);
      if(!buyerAndClient.exists)
        return response.status(buyerAndClient.status).json(buyerAndClient.message);

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

  createBoleto
}