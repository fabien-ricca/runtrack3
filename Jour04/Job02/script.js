
// On définit la focntion qui prend en paramètre le fichier json et une clé, pour retourner un élément du fichier
function jsonValueKey(file, key) {

    fetch(file)                                     // On lance la requete fetch
        .then(response => response.json())              // Première promesse qui contient notre réponse
        .then(response => console.log(response[key]));      // Seconde promesse qui contient les données, dont on affiche l'élément associé à la clé en paramètre
}

jsonValueKey("info.json", "city");                  // On fait appel à la fonction



