import Validator from '../classes/Validator';

describe('Validator', () => {
  // Проверка корректных имен пользователей
  test('should accept valid usernames', () => {
    const validator = new Validator('userName');
    expect(validator.validateUsername()).toBe(true);
  });

  // Проверка отказа от имен пользователей с более чем тремя подряд идущими цифрами
  test('should reject usernames with more than three consecutive digits', () => {
    const validator = new Validator('user123456');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, начинающихся с цифры
  test('should reject usernames starting with a digit', () => {
    const validator = new Validator('123user');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, заканчивающихся цифрой
  test('should reject usernames ending with a digit', () => {
    const validator = new Validator('user123');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, начинающихся или заканчивающихся с подчеркиванием
  test('should reject usernames with underscores at start/end', () => {
    const validator = new Validator('_user_');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, начинающихся или заканчивающихся с дефисом
  test('should reject usernames with hyphens at start/end', () => {
    const validator = new Validator('-user-');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от длинных имен пользователей (более 30 символов)
  test('should reject usernames longer than 30 characters', () => {
    const validator = new Validator('a'.repeat(31));
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка принятия имен польователей с буквами и цифрами (окончание имени не должно быть цифрой)
  test('should accept usernames with letters and numbers', () => {
    const validator = new Validator('user123User456');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, состоящих только из цифр
  test('should reject usernames with only numbers', () => {
    const validator = new Validator('123456');
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, состоящих только из подчеркиваний
  test('should reject usernames with only underscores', () => {
    const validator = new Validator('_'.repeat(31));
    expect(validator.validateUsername()).toBe(false);
  });

  // Проверка отказа от имен пользователей, состоящих только из дефисов
  test('should reject usernames with only hyphens', () => {
    const validator = new Validator('-'.repeat(31));
    expect(validator.validateUsername()).toBe(false);
  });
});
