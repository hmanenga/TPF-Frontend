// src/utils/validation.ts

/**
 * Validates an email address using a regular expression.
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating whether the email address is valid.
 *
 * @remarks
 * This function uses a regular expression to check if the provided email address
 * matches the pattern of a standard email address.
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates a password by checking its length.
 *
 * @param password - The password to validate.
 * @returns A boolean indicating whether the password is valid.
 *
 * @remarks
 * This function checks if the provided password is at least 6 characters long.
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};