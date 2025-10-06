/**
 * Gestionnaire d'utilisateurs
 * @module UserManager
 */

/**
 * @typedef {Object} User
 * @property {string} id - Identifiant unique
 * @property {string} name - Nom complet
 * @property {string} email - Adresse email
 * @property {number} age - Âge en années
 * @property {Array<string>} roles - Rôles de l'utilisateur
 */

/**
 * Crée un nouvel utilisateur dans le système
 *
 * @param {Object} userData - Données de l'utilisateur
 * @param {string} userData.name - Nom complet (min 2 caractères)
 * @param {string} userData.email - Email valide
 * @param {number} userData.age - Âge (minimum 18)
 * @returns {User} L'utilisateur créé avec son ID
 * @throws {ValidationError} Si les données sont invalides
 * @throws {DuplicateError} Si l'email existe déjà
 *
 * @example
 * const user = createUser({
 *   name: 'Alice Dupont',
 *   email: 'alice@example.com',
 *   age: 25
 * })
 * console.log(user.id) // "user_abc123"
 */
const createUser = (userData) => {
  validateUserData(userData)
  const user = {
    id: generateId(),
    ...userData,
    roles: ['user']
  }
  database.save(user)
  return user
}
