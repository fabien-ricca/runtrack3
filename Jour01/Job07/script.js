
let date = new Date();              // on récupère la date du jour

function jourtravaille(date){
    let indexDay = date.getDay();   // On récupère le jour, l'index du jour (de 0 à 6), le mois(de 0 à 11) et l'année
    let day = date.getDate();
    let idmonth = date.getMonth();
    let year = date.getFullYear(4);
    let currentDate = day.toString() + " " + idmonth.toString();        // On créé une variable str à partir du jour et du mois
    let letterMonth ="";


    let feries = ["16 0", "1 0", "10 3", "1 4"];            // Liste contenant les jours feriés "jour mois"

    // Pour convertir le mois de chiffre en lettre (0 => Janvier)
    let mois =["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    for(let i=0; mois[i]; i++){
        if(idmonth == i){
            letterMonth = mois[i];
            break;
        }
    }

    // Si la current date est présente dans la liste des feriés
    if((feries.includes(currentDate))){
        console.log("Le " + day + " " + letterMonth + " " + year + " est un jour ferié."); 
    }

    // Sinon, si elle est un samedi (5) ou un dimanche (6)
    else if(indexDay == 6 || indexDay == 5){
        console.log("Le " + day + " " + letterMonth + " " + year + " est un Week-end."); 
    }

    // Sinon c'est un jour travaillé
    else{
        console.log("Le " + day + " " + idmonth + " " + year + " est un jour travaillé.");
    }
    
}

jourtravaille(date);