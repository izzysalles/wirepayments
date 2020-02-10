const Buyer = require('../models/buyer');
const { validateBuyerInfo } = require('./utils/controllerValidation');

module.exports = {
  async store (request, response) {
    const { name, email, cpf } = request.body;

    const buyerInfo = validateBuyerInfo(name, email, cpf);
    if(buyerInfo.invalid)
      return response.status(buyerInfo.status).json(buyerInfo.message);

    const buyer = await Buyer.create({ name, email, cpf });
    return response.status(201).json(buyer);
  }
};