// index.js - Structure du menu principal

const readline = require('readline')
const dealManager = require('./dealManager')
const voteManager = require('./voteManager')
const logger = require('./logger')

// Interface pour lecture console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Affiche le menu principal
 */
const displayMenu = () => {
  console.clear()
  console.log('========================================')
  console.log('   MINI-DEALABS - Bons Plans')
  console.log('========================================')
  console.log('')
  console.log('1. 📦 Voir tous les deals (triés par température)')
  console.log('2. 🔍 Rechercher un deal')
  console.log('3. ➕ Créer un nouveau deal')
  console.log('4. 🔥 Voter pour un deal')
  console.log('5. 📊 Statistiques')
  console.log('0. ❌ Quitter')
  console.log('')
}

/**
 * Gère le choix de l'utilisateur
 */
const handleChoice = async (choice) => {
  switch(choice) {
    case '1':
      await displayAllDeals()
      break
    case '2':
      await searchDeals()
      break
    case '3':
      await createNewDeal()
      break
    case '4':
      await voteForDeal()
      break
    case '5':
      await displayStatistics()
      break
    case '0':
      exitApplication()
      break
    default:
      console.log('\n❌ Choix invalide. Veuillez entrer un nombre entre 0 et 5.')
      await waitForEnter()
  }
}

/**
 * Boucle principale de l'application
 */
const main = async () => {
  let running = true
  
  logger.info('Application démarrée')
  
  while(running) {
    displayMenu()
    
    const choice = await askQuestion('Votre choix : ')
    
    try {
      await handleChoice(choice)
    } catch (error) {
      console.log(`\n❌ ERREUR: ${error.message}`)
      logger.error('Erreur dans le menu', { error: error.message })
      await waitForEnter()
    }
  }
}

// Démarrage
main()
