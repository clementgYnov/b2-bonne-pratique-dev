// any - À ÉVITER (perd tous les bénéfices de TypeScript)
let donnee: any = "peut être n'importe quoi";

// unknown - Version sûre de 'any'
let valeur: unknown = 10;
if (typeof valeur === "number") {
  console.log(valeur + 5); // TypeScript sait que c'est un number
}

// void - Pour les fonctions qui ne retournent rien
function afficher(message: string): void {
  console.log(message);
}

// never - Pour les fonctions qui ne terminent jamais
function erreur(message: string): never {
  throw new Error(message);
}

// null et undefined
let nullable: string | null = null;
let optionnel: string | undefined = undefined;

// test affichage
afficher("Bonjour TypeScript!");
try {
  erreur("Ceci est une erreur");
} catch (e) {
  console.error(e);
}

console.log("Hello TypeScript!");

function greet(name: string): string {
    return `Bonjour ${name}!`;
}

console.log(greet("Monde"));
