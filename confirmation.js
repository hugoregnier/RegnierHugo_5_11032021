let panier = JSON.parse(localStorage.getItem("panier")); //----  On initialise à chaque fois notre localStorage ----//
let orderId = window.location.search.substr(1).split("=")[1];
let total = 0;

for (let i in panier) {  //---- refait une boucle for pour le total----//
    total += panier[i].price;
}


let content = document.getElementById('content');
content.innerText = 'Nous vous remercions pour votre commande N°' + orderId;
 
let totalPrice = document.getElementById('totalPanier');

console.log(panier)
totalPrice.innerText = "Montant total de votre commande " + total + " €";


localStorage.setItem('panier', JSON.stringify([]));  //---- on remet a jour le panier ----//


