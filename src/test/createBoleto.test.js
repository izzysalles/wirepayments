const paymentController = require('../controllers/paymentController');

describe('Boleto payment unit test', () => {
  it('valid createBoleto', () => {
    expect(paymentController.createBoleto().length).toEqual(48);
    expect((/^[0-9]*$/).test(paymentController.createBoleto())).toEqual(true);
  })
});
