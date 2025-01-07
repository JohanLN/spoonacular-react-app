import { expect } from '@storybook/test';
import { describe, it } from 'vitest';
import passwordValidation from './passwordValidation.regex';

describe('Password Validation Regex', () => {
  // Test for valid passwords
  it('should accept valid passwords meeting all requirements', () => {
    const validPasswords = [
      'Password123!',
      'Complex1@Password',
      'Abcd123!@#',
      'Test1234$',
    ];

    validPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(true);
    });
  });

  // Test minimum length requirement
  it('should reject passwords shorter than 8 characters', () => {
    const shortPasswords = ['Ab1!', 'Cd2@', 'Ef3#'];

    shortPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });

  // Test lowercase requirement
  it('should reject passwords without lowercase letters', () => {
    const noLowerPasswords = ['PASSWORD123!', 'ABCD1234@', 'TEST1234#'];

    noLowerPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });

  // Test uppercase requirement
  it('should reject passwords without uppercase letters', () => {
    const noUpperPasswords = ['password123!', 'abcd1234@', 'test1234#'];

    noUpperPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });

  // Test number requirement
  it('should reject passwords without numbers', () => {
    const noNumberPasswords = ['Password!@', 'TestingPass#', 'AbcdEfgh!'];

    noNumberPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });

  // Test special character requirement
  it('should reject passwords without special characters', () => {
    const noSpecialPasswords = ['Password123', 'TestPass1234', 'AbcdEfgh123'];

    noSpecialPasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });

  // Test whitespace restriction
  it('should reject passwords containing whitespace', () => {
    const whitespacePasswords = ['Password 123!', 'Test Pass1@', 'Ab cd123#'];

    whitespacePasswords.forEach((password) => {
      expect(passwordValidation.test(password)).toBe(false);
    });
  });
});
