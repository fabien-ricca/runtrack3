
const body = document.querySelector("body");                        // On cible le body
const form = document.querySelector("form");                        // On cible le form
const select_types = document.querySelector("#select_types");       // On cible le select du formulaire
const pokemonType = [];


// Fonction qui récupère les types des pokemons
function get_types() {
    fetch("pokemon.json")                                           // On lance la requete fetch
        .then((response) => {                                           // Première promesse qui retourne la promesse du json
            return response.json()
        })
        
        .then((data) => {                                               // Seconde promesse qui contient les données
            for(let i=0; i<data.length; i++) {                              // On parcourt le fichier pour ajouter les types dans la liste
                if(pokemonType.includes(String(data[i].type)) === false){       // Si le type n'est aps dans le tableau on l'y ajoute
                    pokemonType.push(String(data[i].type));
                }
            }
            push_select();                                          // On fait appel à la focntion push_select()
        })
}


function push_select() {
    for(let k=0; k < pokemonType.length; k++) {
        option_types = document.createElement("option");
        option_types.textContent = pokemonType[x];
        select_types.append(option_types);
    }
}



form.addEventListener("submit", function (query) {
    query.preventDefault();

    const request = new FormData(form);
    const user_input = [...request];

    fetch("pokemon.json")
        .then((response) => {
            return response.json()
        })
    
        .then((data) => {
            for(let t = 0; t < data.length; t++) {
                if(data[t].type == user_input[2][1]) {
                    const display_request = document.createElement("p");
                    display_request.innerHTML = String(data[t].name.french);
                    body.appendChild(display_request);
                }

                else if(user_input[2][1] == '--') {
                    console.log(user_input[2][1])

                        if(data[t].id == user_input[0][1] || data[t].name.french == user_input[1][1]) {
                            const display_request = document.createElement("p");
                            display_request.innerHTML = String(data[t].name.french);
                            body.appendChild(display_request);
                    }
                }
            }
            push_select();
        })
});

get_types();



