
function sendWhatsapp(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const message = document.getElementById('message').value;
const phonenumber = '5547996394734'

const text = `Hello, my name is ${name}, ${message}`
const formatedmessage = encodeURIComponent(text);

const url = `https://wa.me/${phonenumber}?text=${formatedmessage}`

window.open(url, '_blank');
}



