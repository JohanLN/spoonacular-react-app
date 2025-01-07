import passwordValidation from '@/lib/passwordValidation.regex';
import { z } from 'zod';

export const loginSchema = z.object({
  mail: z.string().email({
    message: 'Must be a valid email',
  }),
  password: z.string().regex(passwordValidation, {
    message:
      'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character',
  }),
});

export type Login = z.infer<typeof loginSchema>;
