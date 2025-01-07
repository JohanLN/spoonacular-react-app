import passwordValidation from '@/lib/passwordValidation.regex';
import { z } from 'zod';

export const signupSchema = z
  .object({
    mail: z.string().email({
      message: 'Must be a valid email',
    }),
    password: z.string().regex(passwordValidation, {
      message:
        'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character',
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export type Signup = z.infer<typeof signupSchema>;
