
//Etape 1 - constructeurs de classe
//convention : les noms de classe commencent par une majuscule
class Film {
    constructor(titre, dateSortie, realisatrice) {
        this.titre = titre;
        this.dateSortie = dateSortie;
        this.realisatrice = realisatrice;
    }
}

class Realisatrice {
    constructor(nom, prenom, anneeNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.anneeNaissance = anneeNaissance;
    }
}

function aboutFilm(film) {
    console.log(`le film ${film.titre} est sorti en ${film.dateSortie} et est réalisé par ${film.realisatrice.prenom} ${film.realisatrice.nom}`)
}

// Création des instances
const real1 = new Realisatrice("Triet", "Justine", 1978);
const real2 = new Realisatrice("Campion", "Jane", 1954);
const real3 = new Realisatrice("Bigelow", "Kathryn", 1951);

const film1 = new Film("Anatomie d’une chute", 2023, real1);
const film2 = new Film("The Power of the Dog", 2021, real2);
const film3 = new Film("Démineurs", 2008, real3);

// Test de la fonction
aboutFilm(film1);
aboutFilm(film2);
aboutFilm(film3);
