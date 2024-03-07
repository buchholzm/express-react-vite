import crypto from 'node:crypto';

/**
 * Creates hash for password
 *
 * @param {string} password
 * @returns
 */
export function hashPassword(password) {
  // Creating a unique salt for a particular user
  const salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations,
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');

  return `${salt}$${hash}`;
}

/**
 * Validates password against hashed password
 *
 * @param {string} password
 * @param {string} hashedPassword
 * @returns
 */
export function validatePassword(password, hashedPassword) {
  const [salt, hashValue] = hashedPassword.split('$');

  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return hashValue === hash;
}
