

function bisextile(v1){
    if(v1 % 4 == 0 && v1 % 100 !=0){
        return true;
    }
    else if(v1 % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(bisextile(2020));