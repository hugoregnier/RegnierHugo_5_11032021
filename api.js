// --------Requête pour l'API---------------//
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        // console.log(request);
        //------------- Boucle sur la réponse de l'api ---------------//
        for (let item of response) {
            //------------- Création d'éléments avec le DOM ---------------//
            let content = document.getElementById('content');

            let card = document.createElement('div');
            card.classList.add("card");
            card.addEventListener('click', function () {
                document.location.href = 'produit.html?id=' + item._id;
            })

            let title = document.createElement('h1');
            title.innerText = item.name;

            let img = document.createElement('img');
            img.src = item.imageUrl;

            let description = document.createElement('p');
            description.innerText = item.description;

            let price = document.createElement('div');
            price.classList.add("price");
            price.innerText = item.price + (' €');


            // -------------------appendChild à faire dans l'ordre ! -----------------------//
            content.appendChild(card);
            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(description);
            card.appendChild(price);
            console.log(item);
        }
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();

