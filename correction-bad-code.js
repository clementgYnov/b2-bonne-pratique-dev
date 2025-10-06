// Noms de variables explicites
// Constantes pour les valeurs fixes
// Fonctions avec responsabilités uniques
// Template literals
// Arrow functions
// Méthodes modernes (filter, forEach)

const users = [
  { name: 'Alice', age: 25, email: 'alice@test.com' },
  { name: 'Bob', age: 30, email: 'bob@test.com' }
]

const ADULT_AGE = 18

const getAgeCategory = (age) => {
  return age >= ADULT_AGE ? 'Adult' : 'Minor'
}

const displayUserInfo = (user) => {
  const ageCategory = getAgeCategory(user.age)
  console.log(`${user.name} is ${user.age} years old`)
  console.log(ageCategory)
}

const filterUsersByMinAge = (users, minAge) => {
  const filteredUsers = users.filter(user => user.age >= minAge)
  return filteredUsers
}

// Affichage de tous les utilisateurs
users.forEach(displayUserInfo)

// Filtrage des adultes
const adults = filterUsersByMinAge(users, ADULT_AGE)
console.log('Adults:', adults)
