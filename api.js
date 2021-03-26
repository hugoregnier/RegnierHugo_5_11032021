
// function addElem (e) {
//     let elem = document.createElement(e.tag);
//     if (e.src) {
//         elem.src = e.src;
//     } 
//     if(e.text) {
//         elem.innerText = e.text;
//     }
//     if(e.click) {
//         elem.onclick = ()=>{alert(e.click)}
//     }
//     if(e.class) {
//         for (let item of e.class) {
//             elem.classList.add(item);
//         }
//     }
//     return elem;
// }



let content = document.getElementById('content');
// --------Requête pour l'API---------------//
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
//------------- Boucle sur la réponse de l'api ---------------//
        for(let item of response){ 
//------------- Création d'éléments  ---------------//
            let card = document.createElement('div');
            card.classList.add("card");
            // card.addEventListener('click', function() { alert(item.name)});

            let title = document.createElement('h1');
            title.innerText = item.name;

            let img = document.createElement('img');
            img.src = item.imageUrl;

            let description = document.createElement('p');
            description.innerText = item.description;

            let select = document.createElement('select');
            select.name = "Optique";


            

            // let card = addElem({tag: 'div', class:['card']});
            // let title = addElem({tag: 'h1', text: item.name});
            // let img = addElem({tag: 'img', src: item.imageUrl});
            // let button = addElem({tag: 'button', text: item.price, click: 'ajouté au papani'});

// -------------------appendChild à faire dans l'ordre ! -----------------------//

            card.appendChild(title);
            card.appendChild(img);
            card.appendChild(description)
            // card.appendChild(button);
            content.appendChild(card);

            console.log(item);
        }
        
    }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();