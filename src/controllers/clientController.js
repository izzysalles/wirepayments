const Client = require('../models/client');
const { validateClientInfo } = require('./utils/controllerValidation');

module.exports = {
  async store (request, response) {
    const { name } = request.body;

    const clientInfo = validateClientInfo(name);
    if (clientInfo.invalid)
      return response.status(clientInfo.status).json(clientInfo.message);
      
    const client = await Client.create({ name }); 
    return response.status(201).json(client);
  }
};