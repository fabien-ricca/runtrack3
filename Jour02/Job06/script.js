
// On établi le konamiCode
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// On créé la liste où on va stocker le cheat code de l'utilisateur
let cheatCode = [];

const body = document.querySelector("body");               // On cible le bouton 'body'


body.addEventListener("keydown", (event) => {                        // Quand l'utilisateur presse une touche
    cheatCode.push(event.key);                                          // On ajoute l'évènement à la liste cheatCode

    if(cheatCode.length == konamiCode.length){                                  // Si la liste cheatCode contient autant d'éléments que konamiCode
        if(konamiCode.every((value, index) => value === cheatCode[index])){         // On vérifie que les deux tableaux soient identiques
            body.style.backgroundImage = "url(plateforme.png)";                     // S'ils le sont, on affiche une image
        }
    }
});