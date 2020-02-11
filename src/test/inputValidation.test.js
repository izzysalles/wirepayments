const {
  validName,
  validEmail,
  validCpf,
  validAmount,
  validExpirationDate,
  validType
} = require('../utils/inputValidation');

describe('Testing validation methods in inputValidation', () => {
  it('validName with correct inputs', () => {
    expect(validName('Isabella Salles Lourenço')).toEqual(true);
    expect(validName('I want to break free from your lies')).toEqual(true);
    expect(validName('vaca amarela')).toEqual(true);
  }),
  it('validName with incorrect inputs', () => {
    expect(validName('Mama, life had just begun')).toEqual(false);
    expect(validName('So you think you can love me and leave me to die?')).toEqual(false);
    expect(validName('')).toEqual(false);
    expect(validName('1970')).toEqual(false);
    expect(validName('banana@uva.com')).toEqual(false);
  }),

  it('validCpf with correct inputs', () => {
    expect(validCpf('66762878032')).toEqual(true);
    expect(validCpf('49738406889')).toEqual(true);
  }),
  it('validCpf with incorrect inputs', () => {
      expect(validCpf('99999999999')).toEqual(false);
      expect(validCpf('75883948031')).toEqual(false);
      expect(validCpf('wrong!')).toEqual(false);
      expect(validCpf('wrong')).toEqual(false);
      expect(validCpf('')).toEqual(false);
  }),

  it('validEmail with correct inputs', () => {
    expect(validEmail('bellssalles@gmail.com')).toEqual(true);
    expect(validEmail('gatinho@fofinho.com')).toEqual(true);
  }),

  it('validEmail with incorrect inputs', () => {
      expect(validEmail('izzysalles')).toEqual(false);
      expect(validEmail('bellssalles@gmail/com')).toEqual(false);
      expect(validEmail('bellssalles@gmail..com')).toEqual(false);
      expect(validEmail('bellssalles@@gmail.com')).toEqual(false);
      expect(validEmail('gatinho.com')).toEqual(false);
      expect(validEmail('!')).toEqual(false);
      expect(validEmail('45623')).toEqual(false);
      expect(validEmail('')).toEqual(false);
  }),

  it('validAmount with correct inputs', () => {
    expect(validAmount('12353')).toEqual(true);
    expect(validAmount('5555555555')).toEqual(true);
    expect(validAmount('8')).toEqual(true);
  }),
  it('validAmount with incorrect inputs', () => {
    expect(validAmount('12 89')).toEqual(false);
    expect(validAmount('gatinho123')).toEqual(false);
    expect(validAmount('')).toEqual(false);
    expect(validAmount('4.00')).toEqual(false);
    expect(validAmount('5?')).toEqual(false);
  }),

  it('validType with correct inputs', () => {
    expect(validType('boleto')).toEqual(true);
    expect(validType('credit card')).toEqual(true);
  }),
  it('validType with incorrect inputs', () => {
      expect(validType('debit card')).toEqual(false);
      expect(validType('')).toEqual(false);
      expect(validType('5435434')).toEqual(false);
      expect(validType('creditt card')).toEqual(false);
  }),
  
  it('validExpirationDate with correct inputs', () => {
    expect(validExpirationDate('01/28')).toEqual(true);
    expect(validExpirationDate('12/21')).toEqual(true);
    expect(validExpirationDate('08/27')).toEqual(true);
  }),
  it('validExpirationDate with incorrect inputs', () => {
      expect(validExpirationDate('2028')).toEqual(false);
      expect(validExpirationDate('09.21')).toEqual(false);
      expect(validExpirationDate('friends')).toEqual(false);
      expect(validExpirationDate('')).toEqual(false);
  })
});




  
