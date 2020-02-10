const moment = require('moment');

const validName = (input) => {
  return (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/).test(input);
}

const validEmail = (input) => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(input);
}

const validCpf = (input) => {
  var sum;
  var rest;

  sum = 0;
  if (input == '00000000000' ||
      input == '11111111111' || 
      input == '22222222222' || 
      input == '33333333333' || 
      input == '44444444444' || 
      input == '55555555555' || 
      input == '66666666666' || 
      input == '77777777777' || 
      input == '88888888888' || 
      input == '99999999999' ||
      input.length !=11) {
      return false;
  } 

  for (i=1; i<=9; i++) sum = sum + parseInt(input.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(input.substring(9, 10)) ) return false;

  sum = 0;
  for (i = 1; i <= 10; i++) sum = sum + parseInt(input.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(input.substring(10, 11) ) ) return false;
  return true;
}

const validAmount = (input) => {
  return ((/^[0-9]*$/).test(input) && input > 0);
}

const validExpirationDate = (input) =>
{
  if ((/^\d{2}\/\d{2}$/).test(input))
    return moment(input, 'MM/YY').isAfter(moment())
  else
    return false;
}

const validType = (input) => {
  return (input == 'boleto' || input == 'credit card');
}

module.exports = {
  validName,
  validEmail,
  validCpf,
  validAmount,
  validType,
  validExpirationDate
}