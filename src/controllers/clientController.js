const Client = require('../models/client');

module.exports = {
  async store (request, response) {
    const { name } = request.body;
      
    const client = await Client.create({ name }); 
    return response.status(201).json(client);
  }
};