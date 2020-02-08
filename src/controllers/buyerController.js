const Buyer = require('../models/buyer');

module.exports = {
  async store (request, response) {
    const { name, email, cpf } = request.body;

    const buyer = await Buyer.create({ name, email, cpf });
    return response.status(201).json(buyer);
  }
};