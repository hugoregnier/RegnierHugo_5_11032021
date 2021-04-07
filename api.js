// let panier = Array();

// --------Requête pour l'API---------------//
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
//------------- Boucle sur la réponse de l'api ---------------//
        for(let item of response){ 
//------------- Création d'éléments  ---------------//
            let content = document.getElementById('content');

            let card = document.createElement('div');
            card.classList.add("card");
            // card.addEventListener('click', function() { alert(item.name)});

            let title = document.createElement('h1');
            title.innerText = item.name;

            let img = document.createElement('img');
            img.src = item.imageUrl;
            img.addEventListener('click', function() {
                document.location.href='produit.html?id='+item._id;
            })

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
            // card.appendChild(button);
            card.appendChild(price);
            console.log(item);
        }
// -------------------Début - Version Fabiche ! -----------------------//
// for(let item of response){
//     let card = addElem({parent: content, tag: 'div', class:['card']});

//     addElem({parent: card, tag: 'h1', text: item.name});
//     addElem({parent: card, tag: 'img', src: item.imageUrl});
//     addElem({parent: card, tag: 'p', text: item.description});

//     let select = addElem({parent: card, tag: 'select', name: 'Optique'});
//     for (let i in item.lenses) {
//         addElem({parent: select, tag: 'option', value: item.lenses[i], text: item.lenses[i]});
//     }
    
//     addElem({parent: card, tag: 'div', text: item.price+' €', class:['price']});
//     addElem({parent: card, tag: 'button', text: "Ajouter au Panier", addPanier: {item, select}});
// }
// // x2 car x2 c'est toujours mieux !!!!
// for(let item of response){
//     let card = addElem({parent: content, tag: 'div', class:['card']});

//     addElem({parent: card, tag: 'h1', text: item.name});
//     addElem({parent: card, tag: 'img', src: item.imageUrl});
//     addElem({parent: card, tag: 'p', text: item.description});

//     let select = addElem({parent: card, tag: 'select', name: 'Optique'});
//     for (let i in item.lenses) {
//         addElem({parent: select, tag: 'option', value: item.lenses[i], text: item.lenses[i]});
//     }
    
//     addElem({parent: card, tag: 'div', text: item.price+' €', class:['price']});
//     addElem({parent: card, tag: 'button', text: "Ajouter au Panier", addPanier: {item, select}});
// }
// -------------------Fin - Version Fabiche ! -----------------------//
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();


// -------------------Comment devenir fénéant - Version Fabiche ! -----------------------//
// function addElem (e) {
//     let elem = document.createElement(e.tag);
//     if (e.src) {
//         elem.src = e.src;
//     } 
//     if(e.text) {
//         elem.innerText = e.text;
//     }
//     if(e.html) {
//         elem.innerHTML = e.html;
//     }
//     if(e.href) {
//         elem.href = e.href;
//     }
//     if(e.value) {
//         elem.value = e.value;
//     }
//     if(e.style) {
//         elem.style = e.style;
//     }
//     if(e.name) {
//         elem.name = e.name;
//     }

//     if(e.addPanier) {
//         elem.addEventListener('click', function() {
//             panier.push({_id: e.addPanier.item._id, name: e.addPanier.item.name, optique: e.addPanier.select.value, price: e.addPanier.item.price});
//             console.log({panier});//<= tu peux voir ton panier dans ta console
//             let total = 0;
//             for(let item of panier){
//                 total += item.price;
//             }
//             console.log(total+ ' €');//<= tu peux voir le montant de ta facture dans ta console
//             alert(e.addPanier.item.name+`
// avec optique `+e.addPanier.select.value+`
// est ajouté à votre panier`);
//         });
//     }

//     if(e.id) {
//         elem.id = e.id;
//     }
//     if(e.class) {
//         for (let item of e.class) {
//             elem.classList.add(item);
//         }
//     }
//     if(e.other) {
//         elem = e.other;
//     }
//     if(e.parent) {
//         e.parent.appendChild(elem);
//     }
//     return elem;
// }
