const cardValidator = require('card-validator');

const { validName, 
        validEmail, 
        validCpf, 
        validAmount, 
        validType, 
        validExpirationDate, 
} = require('../../utils/inputValidation');

const validateBuyerInfo = (name, email, cpf) => {
  if (!validName(name))
    return { invalid: true, status: 400, message: 'An invalid name was entered, just letters are accepted!' };

  if (!validEmail(email))
    return { invalid: true, status: 400, message: 'An invalid email was entered, try again!' };

  if (!validCpf(cpf))
    return { invalid: true, status: 400, message: 'An invalid cpf format was entered, just numbers are accepted!' };
    
  return { invalid: false };
}

const validateClientInfo = (name) => {
  if (!validName(name))
    return { invalid: true, status: 400, message: 'An invalid name was entered, just letters are accepted!' };

  return { invalid: false };
}

const validatePaymentInfo = (amount, type) => {
  if(!validAmount(amount))
    return { invalid: true, status: 400, message: 'An invalid amount was entered!' };

  if(!validType(type))
    return { invalid: true, status: 400, message: 'An invalid type was entered!' };
    
  return { invalid: false };
}

const validateCreditCardInfo = (credit_card) => {
  
  if (!validName(credit_card.holder_name))
    return { invalid: true, status: 400, message: 'An invalid holder name was entered!' };
  
  const validCard = cardValidator.number(credit_card.number);
  if (!validCard.isValid)
    return { invalid: true, status: 400, message: 'An invalid card was entered!' };
  
  if (!validExpirationDate(credit_card.expiration_date))
    return { invalid: true, status: 400, message: 'An invalid expiration date was entered!' };

  const validCvv = cardValidator.cvv(credit_card.cvv);
  if (!validCvv.isValid)
    return { invalid: true, status: 400, message: 'An invalid CVV was entered!' };

  return { invalid: false };
}

module.exports = { 
  validateBuyerInfo,
  validateClientInfo,
  validatePaymentInfo,
  validateCreditCardInfo
}