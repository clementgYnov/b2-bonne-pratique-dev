/**
 * Gestionnaire de cache pour améliorer les performances
 * @class
 */
class CacheManager {
  /**
   * Crée une instance de CacheManager
   * @constructor
   * @param {Object} options - Options de configuration
   * @param {number} options.maxSize - Taille max du cache (en Mo)
   * @param {number} options.ttl - Durée de vie (en secondes)
   */
  constructor(options = {}) {
    this.maxSize = options.maxSize || 100
    this.ttl = options.ttl || 3600
    this.cache = new Map()
  }

  /**
   * Récupère une valeur du cache
   * @param {string} key - Clé de la valeur
   * @returns {*|null} La valeur ou null si expirée/absente
   */
  get(key) {
    const item = this.cache.get(key)
    if (!item) return null
    if (this.isExpired(item)) {
      this.cache.delete(key)
      return null
    }
    return item.value
  }

  /**
   * Stocke une valeur dans le cache
   * @param {string} key - Clé
   * @param {*} value - Valeur à cacher
   * @returns {void}
   */
  set(key, value) {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    })
  }
}
