import { describe, expect, it } from 'vitest';
import { signupSchema } from './signup.schema';

describe('signupSchema', () => {
  it('should validate a correct schema', () => {
    const validSchema = {
      mail: 'johan@lenagard.com',
      password: 'agcVfj256!xzsh',
      confirmPassword: 'agcVfj256!xzsh',
    };

    const result = signupSchema.safeParse(validSchema);
    expect(result.success).toBe(true);
  });

  it('should fail if the provided mail is not a valid email', () => {
    const invalidSchema = {
      mail: 'johanlenagard.com',
      password: 'agcVfj256!xzsh',
      confirmPassword: 'agcVfj256!xzsh',
    };

    const result = signupSchema.safeParse(invalidSchema);
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('Must be a valid email');
  });

  it('should fail if the provided password does not meet the password validation regex', () => {
    const invalidSchema = {
      mail: 'johan@lenagard.com',
      password: 'test',
      confirmPassword: 'test',
    };

    const result = signupSchema.safeParse(invalidSchema);
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(
      'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character',
    );
  });

  it('should fail if the provided password and confirmPassword do not match', () => {
    const invalidSchema = {
      mail: 'johan@lenagard.com',
      password: 'agcVfj256!xzsh',
      confirmPassword: 'test',
    };

    const result = signupSchema.safeParse(invalidSchema);
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe('Passwords do not match');
  });
});
