/**
 * Password requirements:
 * - At least 8 characters long (?=.{8,})
 * - At least 1 lowercase letter (?=.*[a-z])
 * - At least 1 uppercase letter (?=.*[A-Z])
 * - At least 1 number (?=.*\d)
 * - At least 1 special character (?=.*[!@#$%^&*(),.?":{}|<>])
 * - No whitespace allowed (?!.*\s)
 */

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?!.*\s).{8,}$/;

export default passwordValidation;
