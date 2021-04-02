let panier = JSON.parse(localStorage.getItem("panier"));
if (!panier) {
    panier = new Array();
}
console.log(panier);

