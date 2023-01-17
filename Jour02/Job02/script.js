
const body = document.querySelector("body");            // On cible le body pou pouvoir y injecter notre article

const article = document.createElement("article");      // On créé un élément <article>
article.setAttribute("id", "text");                     // On lui donne un id = "text"
article.setAttribute("style", "display: none");         // On définit son attribue 'style' sur none pour que le contenue soit masqué au chargement de la page
article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";       // On lui donne un contenu


body.appendChild(article);                              // On ajoute l'élément <article> au body
const id = document.querySelector("#text");             // Et on le cible grâce à son id


function showhide(){
    if(id.style.display != "none"){                     // Si son style est est différent de "none" (style="none")
        id.style.display = "none";                          // On le définit sur "none" afin qu'il disparaisse
    }
    else{                                               // Sinon
        id.style.display = "block";                         // On le passe sur "block" pour le faire apparaitre
    }
}

const button = document.querySelector("#button");       // On cible le bouton 'button'

button.addEventListener("click", () => {                // Si l'utilisateur clique sur le bouton
    showhide();                                             // On fait appel à la fonction pour faire apparaître/disparaître le contenu de l'article
});