const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateAge = (age) => {
  return typeof age === 'number' && age >= 0 && age <= 150
}

const validateUser = (user) => {
  if (!user.name || user.name.length < 2) {
    throw new Error('Invalid name')
  }
  if (!validateEmail(user.email)) {
    throw new Error('Invalid email')
  }
  if (!validateAge(user.age)) {
    throw new Error('Invalid age')
  }
  return true
}

const sanitize = (input) => {
  return input.toString().trim().replace(/[<>]/g, '')
}

module.exports = { validateEmail, validateAge, validateUser, sanitize }
