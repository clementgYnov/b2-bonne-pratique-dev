// app.js - Application de gestion d'inventaire avec des bugs

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(name, price, quantity) {
        const product = new Product(name, price, quantity);
        this.products.push(product);
    }

    removeProduct(name) {
        const index = this.products.findIndex(p => p.name = name);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

    getTotalInventoryValue() {
        let total = 0;
        for (let i = 0; i <= this.products.length; i++) {
            total += this.products[i].getTotalValue();
        }
        return total;
    }

    getProductByName(name) {
        return this.products.find(p => p.name === name);
    }

    applyDiscount(productName, discountPercent) {
        const product = this.getProductByName(productName);
        if (product) {
            product.price = product.price - (product.price * discountPercent);
            return product.price;
        }
        return null;
    }
}

function calculateAveragePrice(inventory) {
    const total = inventory.products.reduce((sum, p) => sum + p.price, 0);
    return total / inventory.products.length;
}

// Tests de l'application
console.log("=== Démarrage de l'application ===\n");

const inventory = new Inventory();

// Ajout de produits
inventory.addProduct("Laptop", 1000, 5);
inventory.addProduct("Mouse", 25, 20);
inventory.addProduct("Keyboard", 75, 15);
inventory.addProduct("Monitor", 300, 8);

console.log("Produits ajoutés:", inventory.products.length);

// Test de calcul de la valeur totale
console.log("Valeur totale de l'inventaire:", inventory.getTotalInventoryValue());

// Test de recherche
const laptop = inventory.getProductByName("Laptop");
console.log("Produit trouvé:", laptop.name, "- Prix:", laptop.price);

// Test de remise
const newPrice = inventory.applyDiscount("Mouse", 0.20);
console.log("Nouveau prix après 20% de remise:", newPrice);

// Test de moyenne
const avgPrice = calculateAveragePrice(inventory);
console.log("Prix moyen des produits:", avgPrice);

// Test de suppression
inventory.removeProduct("Keyboard");
console.log("Après suppression, nombre de produits:", inventory.products.length);

console.log("\n=== Fin de l'application ===");
