const {
  validateBuyerInfo,
  validateClientInfo,
  validatePaymentInfo,
  validateCreditCardInfo
} = require('../controllers/utils/controllerValidation');

describe('Testing validation methods in controllerValidation', () => {
  it('validateBuyerInfo with correct buyer information', () => {
    expect(validateBuyerInfo("Isabella Salles", "bellssalles@gmail.com", "49738406889").invalid).toEqual(false);
    expect(validateBuyerInfo("Isabella Lourenço", "bellssalles@gmail.com", "49738406889").invalid).toEqual(false);
    expect(validateBuyerInfo("We were on a break", "friends@gmail.com", "07619115021").invalid).toEqual(false);
  }),
  it('validateBuyerInfo with incorrect name', () => {
    expect(validateBuyerInfo("Sorry I’m late, but I left late", "joe@hotmail.com", "49738406889").invalid).toEqual(true);
    expect(validateBuyerInfo("How you doin'?", "joe@hotmail.com", "49738406889").status).toEqual(400);
    expect(validateBuyerInfo("How you doin'?", "joe@hotmail.com", "49738406889").message).toEqual('An invalid name was entered, just letters are accepted!');
    expect(validateBuyerInfo('', "siricascudo@gmail.com", "11111111111").invalid).toEqual(true);
  }),
  it('validateBuyerInfo with incorrect email', () => {
    expect(validateBuyerInfo("Jessica", "jessicaaa@@gmail.com", "26392037039").invalid).toEqual(true);
    expect(validateBuyerInfo("Phoebe Buffay", "younger@!hotmail.com", "49738406889").status).toEqual(400);
    expect(validateBuyerInfo("Brian May", "briannmayy@gmail/com", "49738406889").message).toEqual('An invalid email was entered, try again!');
  }),
  it('validateBuyerInfo with incorrect cpf', () => {
    expect(validateBuyerInfo("Siri Cascudo", "siricascudo@gmail.com", "11111111111").invalid).toEqual(true);
    expect(validateBuyerInfo("Phoebe Buffay", "whodoyoulove@gmail.com", "42545445963").status).toEqual(400);
    expect(validateBuyerInfo("Brian May", "briannmayy@gmail.com", "49738489889").message).toEqual('An invalid cpf format was entered, just numbers are accepted!');
  }),

  it('validateClientInfo with correct name', () => {
    expect(validateClientInfo("Isabella Salles").invalid).toEqual(false);
    expect(validateClientInfo("A very big phrase here").invalid).toEqual(false);
  }),
  it('validateClientInfo with incorrect name', () => {
    expect(validateClientInfo("How you doin'?").invalid).toEqual(true);
    expect(validateClientInfo("How you doin'?").status).toEqual(400);
    expect(validateClientInfo("How you doin'?").message).toEqual('An invalid name was entered, just letters are accepted!');
    expect(validateClientInfo("Phoebe 445").invalid).toEqual(true);
    expect(validateClientInfo("Phoebe 445").status).toEqual(400);
    expect(validateClientInfo("Phoebe 445").message).toEqual('An invalid name was entered, just letters are accepted!');
    expect(validateClientInfo('').invalid).toEqual(true);
    expect(validateClientInfo('').status).toEqual(400);
    expect(validateClientInfo('').message).toEqual('An invalid name was entered, just letters are accepted!');
  }),

  it('validatePaymentInfo with correct inputs', () => {
    expect(validatePaymentInfo("566", "boleto").invalid).toEqual(false);
    expect(validatePaymentInfo("50", "credit card").invalid).toEqual(false);
  }),
  it('validatePaymentInfo with incorrect amount', () => {
    expect(validatePaymentInfo("-200", "boleto").invalid).toEqual(true); 
    expect(validatePaymentInfo("-200", "boleto").status).toEqual(400);
    expect(validatePaymentInfo("-200", "boleto").message).toEqual('An invalid amount was entered!');
    expect(validatePaymentInfo("", "credit card").invalid).toEqual(true);
    expect(validatePaymentInfo("", "credit card").status).toEqual(400);
    expect(validatePaymentInfo("", "credit card").message).toEqual('An invalid amount was entered!');
    expect(validatePaymentInfo("!!", "boleto").invalid).toEqual(true);
    expect(validatePaymentInfo("!!", "boleto").status).toEqual(400);
    expect(validatePaymentInfo("!!", "boleto").message).toEqual('An invalid amount was entered!');
  }),
  it('validatePaymentInfo with incorrect type', () => {
    expect(validatePaymentInfo("200", "bboleto").invalid).toEqual(true);
    expect(validatePaymentInfo("200", "bboleto").status).toEqual(400);
    expect(validatePaymentInfo("200", "bboleto").message).toEqual('An invalid type was entered!');
    expect(validatePaymentInfo("55", "credit!card").invalid).toEqual(true);
    expect(validatePaymentInfo("55", "credit!card").status).toEqual(400);
    expect(validatePaymentInfo("55", "credit!card").message).toEqual('An invalid type was entered!');
    expect(validatePaymentInfo("1000", "").invalid).toEqual(true);
    expect(validatePaymentInfo("1000", "").status).toEqual(400);
    expect(validatePaymentInfo("1000", "").message).toEqual('An invalid type was entered!');
  }),
  
  it('validateCreditCardInfo with correct inputs', () => {
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(false);
  }),
  it('validateCreditCardInfo with incorrect holder_name', () => {
    expect(validateCreditCardInfo({ holder_name: "Gabrie1la", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Gabrie1la", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Gabrie1la", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid holder name was entered!');
    expect(validateCreditCardInfo({ holder_name: "", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid holder name was entered!');
    expect(validateCreditCardInfo({ holder_name: "!@@", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "!@@", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "!@@", number: "4274482234504307", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid holder name was entered!');
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "dfsf" }).invalid).toEqual(true);
  }),
  it('validateCreditCardInfo with incorrect number', () => {
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "427448223450455307", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "427448223450455307", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "427448223450455307", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid card was entered!');
    expect(validateCreditCardInfo({ holder_name: "Fernanda Dias", number: "abacate", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Fernanda Dias", number: "abacate", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Fernanda Dias", number: "abacate", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid card was entered!');
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "", expiration_date: "10/24", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "", expiration_date: "10/24", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "", expiration_date: "10/24", cvv: "456" }).message).toEqual('An invalid card was entered!');
  }),
  it('validateCreditCardInfo with incorrect expiration_date', () => {
    expect(validateCreditCardInfo({ holder_name: "Brian May", number: "4274482234504307", expiration_date: "13/204", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Brian May", number: "4274482234504307", expiration_date: "13/204", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Brian May", number: "4274482234504307", expiration_date: "13/204", cvv: "456" }).message).toEqual('An invalid expiration date was entered!');
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/14", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/14", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/14", cvv: "456" }).message).toEqual('An invalid expiration date was entered!');
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "", cvv: "456" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "", cvv: "456" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "", cvv: "456" }).message).toEqual('An invalid expiration date was entered!');
  }),
  it('validateCreditCardInfo with incorrect cvv', () => {
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "12345" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "12345" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "12345" }).message).toEqual('An invalid CVV was entered!');
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "dfsf" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "dfsf" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Isabella Salles", number: "4274482234504307", expiration_date: "10/24", cvv: "dfsf" }).message).toEqual('An invalid CVV was entered!');
    expect(validateCreditCardInfo({ holder_name: "Gabriela", number: "4274482234504307", expiration_date: "10/24", cvv: "" }).invalid).toEqual(true);
    expect(validateCreditCardInfo({ holder_name: "Gabriela", number: "4274482234504307", expiration_date: "10/24", cvv: "" }).status).toEqual(400);
    expect(validateCreditCardInfo({ holder_name: "Gabriela", number: "4274482234504307", expiration_date: "10/24", cvv: "" }).message).toEqual('An invalid CVV was entered!');
  })
});