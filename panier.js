let panier = JSON.parse(localStorage.getItem("panier")); //----  On initialise à chaque fois notre localStorage ----//
if (!panier) {
    panier = new Array();
}

let total = 0;

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
    total += panier[i].price; //----  Prix total avec += / le parseInt transforme en nombre sans virgule ----//

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

let totalPrice = document.getElementById('totalPanier');
totalPrice.innerText = total + " €";
//----fonction Regex : nom,prénom,ville / expression régulière ----//
function validateText(value) {
    return /[a-zA-Z]+/.test(value);
}
//----fonction Regex : adresse / expression régulière ----//
function validateAdresse(value) {
    return /\w+/.test(value);
}
//----fonction Regex : email   / expression régulière ----//
function validateEmail(value) {
    var emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    var valid = emailReg.test(value);

    if (!valid) {
        return false;
    } else {
        return true;
    }
}
//---- button de validation de commande(fonction / if) ----//


