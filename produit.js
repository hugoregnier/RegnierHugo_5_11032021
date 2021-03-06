let id = window.location.search.substr(1).split("=")[1]; //------------- on récupère l'information ---------------//
console.log(id);

let item;

// --------Requête pour l'API---------------//
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        item = JSON.parse(this.responseText);
        //------------- Création d'éléments  DOM ---------------//
        let content = document.getElementById('contentProduit');

        let card = document.createElement('div');
        card.classList.add("cardProduit");

        let title = document.createElement('h1');
        title.innerText = item.name;

        let img = document.createElement('img');
        img.src = item.imageUrl;

        let description = document.createElement('p');
        description.innerText = item.description;

        let select = document.createElement('select');
        select.name = "Optique";

        //------------- Boucle sur les lentilles d'appareils photo ---------------//
        for (let i in item.lenses) {
            let option = document.createElement('option');
            option.innerText = item.lenses[i];
            select.appendChild(option);
        }

        let price = document.createElement('div');
        price.classList.add("price");
        price.innerText = item.price + (' €');

        let button = document.createElement('button');
        button.classList.add("button");
        button.innerText = "Ajouter au Panier";
        button.addEventListener('click', function () {
            addPanier(select);// -------------------je récupère la valeur de select  donc la lense -----------------------//
            alert("l'appareil photo " + item.name + " à bien été ajouté au panier")
        });
        console.log(button);



        // -------------------appendChild à faire dans l'ordre ! -----------------------//
        content.appendChild(card);
        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(select);
        card.appendChild(price);
        card.appendChild(button)
        //console.log(item);

    }
};
request.open("GET", "http://localhost:3000/api/cameras/" + id);
request.send();


// ------------------- On initialise le panier et on le modifie en array -----------------------//
let panier = JSON.parse(localStorage.getItem("panier"));
if (!panier) {
    panier = new Array();
}

// ------------------- Push le produit dans le local storage -----------------------//
function addPanier(optique) {
    item.optique = optique.value;
    panier.push(item);
    console.log(panier);
    localStorage.setItem('panier', JSON.stringify(panier));
}

