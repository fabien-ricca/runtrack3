

function citation(){
    const citation = document.querySelector("#citation").innerHTML;     // Je cible l'élément #citation de la page html (innerHTML -> permet de ne récupérer que le contenue des balises)
    console.log(citation);          // J'en affiche le contenue en console
}

const button = document.querySelector("#button");       // Je cible le bouton #button de la page html

// Si l'utilisateur clique sur le bouton, on éxécute la fonction citation()
button.addEventListener("click", () => {
    citation()
});