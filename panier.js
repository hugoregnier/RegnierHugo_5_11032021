let panier = JSON.parse(localStorage.getItem("panier"));
if (!panier) {
    panier = new Array();
}

for (let i in panier) {

    let name = document.getElementById('name');
    let title = document.createElement('h2');
    title.innerText = panier[i].name;

    let focale = document.getElementById('focale');
    let optique = document.createElement('h2');
    optique.innerText = panier[i].optique;

    let price = document.getElementById('prix');
    let prix = document.createElement('h2');
    prix.innerText = panier[i].price + (' €');

    let supprime = document.getElementById('supprimer');
    let button = document.createElement('button');
    button.classList.add("button");
    button.innerText = "Supprimer du Panier";
    button.addEventListener('click', function () {
        name.removeChild(title);
        focale.removeChild(optique);
        price.removeChild(prix);
        supprime.removeChild(button);
        panier.splice(i, 1); //---- On Supprime un élément dans l'array avec splice ----//
        console.log(panier);
        localStorage.setItem('panier', JSON.stringify(panier)); //---- On remet à jour le localStorage après une suppression ----//
    });

    name.appendChild(title);
    focale.appendChild(optique);
    price.appendChild(prix);
    supprime.appendChild(button);

}

console.log(panier);

