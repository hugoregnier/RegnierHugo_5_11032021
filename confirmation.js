let orderId = window.location.search.substr(1).split("=")[1];

let content = document.getElementById('content');
 content.innerText = orderId;

