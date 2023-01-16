// Fonction pour déterminer si un nombre est premier ou non
function isPrime(nbr){
    for(let i=2; i<=nbr; i++){
        if(nbr % i == 0 && nbr != i){
            return false;
        }
    }
    return true;
}

// Fonction qui additionne deux nombres s'ils sont premiers tout les deux
function sommenombrespremiers(p1, p2){
    if(isPrime(p1) && isPrime(p2)){
        return p1 + p2;
    }
    else{
        return "Cette fonction nécessite deux nombres premiers pour fonctionner";
    }
}

console.log(sommenombrespremiers(19, 23));