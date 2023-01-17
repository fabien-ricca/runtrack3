
const button = document.querySelector("#button");               // On cible le bouton 'button'


function addone(){  
    compteur = document.querySelector("#compteur");             // On récupère la balise <P id="compteur"> et son contenu
    compteur.innerHTML = parseInt(compteur.innerHTML)+1;        // On récupère le contenu, on le converti en int et on le modifie en lui ajoutant 1
}

button.addEventListener("click", () => {                        // Quand l'utilisateur clique sur le bouton, on fait appek à la fonction addone()
    addone();
});