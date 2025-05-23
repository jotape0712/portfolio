
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

document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector('#about');
        const description = document.querySelector('.description');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        description.classList.add('visible');
                        observer.unobserve(entry.target); // só anima uma vez
                    }
                });
            },
            {
                threshold: 0.5 // metade visível na tela
            }
        );

        observer.observe(aboutSection);
    });





