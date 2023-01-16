let array = [1, 8, 56, 74 ,12 ,83 ,18 ,9 ,71, 0, 3, 25, 17]

function tri(array, order){
    if(order == "Asc"){
        return array.sort((a, b) => a - b);
    }
    else if (order == "Desc"){
        return array.sort((a,b) => b - a);
    }
}
console.log("Entrer une liste en premier paramètre, puis 'Asc' (Ascendant) ou 'Desc' (Descendant) pour le trier.")
console.log(tri(array, "Asc"));