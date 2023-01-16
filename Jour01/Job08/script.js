function isPrime(nbr){
    let test = 0;
    for(let i=1; i<=nbr; i++){
        if(i % nbr == 0){
            test ++;
        }
    }

    if (test == 2){
        console.log("Ok");
    }
    else{
        console.log("Pas ok");
    }
}

isPrime(2);