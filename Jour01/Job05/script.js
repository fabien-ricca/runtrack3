function afficherjourssemaine(){
    let jourssemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    for(let i=0; typeof( jourssemaine[i] ) != "undefined"; i++){
            console.log(jourssemaine[i]);
    }
    
}

afficherjourssemaine()

// typeof(tableau[élément]) != "undefined" est l'équivalent de isset() en php