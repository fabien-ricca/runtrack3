
const textarea = document.querySelector("#keylogger");       // On cible le textarea par son id

function inArea(letter) {                                   
    if(letter.key.length == 1) {                             // Si le nombre de caractère saisi est == à 1
        let double = textarea.value;                               // On stocke le contenu du textarea dans une variable
        double += letter.key;                                      // On rajoute la caractère saisi à la variable
        textarea.value = double;                                   // On modifie le contenue du textarea par le contenu de la variable
    }
}
    
    
document.addEventListener("keydown", inArea);               // On écoute les évenements du clavier, et on fait appel à la fonction inArea
        
