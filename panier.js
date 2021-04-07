let panier = JSON.parse(localStorage.getItem("panier"));
if (!panier) {
    panier = new Array();
    }

    for(let product of panier) {

        let name = document.getElementById('name');
        let title = document.createElement('h2');
            title.innerText = product.name;
        
        let focale = document.getElementById('focale');
        let optique = document.createElement('h2');
            optique.innerText = product.optique;

        let price = document.getElementById('prix');
        let prix = document.createElement('h2');
            prix.innerText = product.price;   

        let supprime = document.getElementById('supprimer');
        let button = document.createElement('button');
        button.classList.add("button");
        button.innerText = "Supprimer du Panier";
        button.addEventListener('click', function () {
           name.removeChild(title);
           focale.removeChild(optique);
           price.removeChild(prix);
           supprime.removeChild(button);
        });

            name.appendChild(title);
            focale.appendChild(optique);
            price.appendChild(prix);
            supprime.appendChild(button);
            
    }

console.log(panier);

