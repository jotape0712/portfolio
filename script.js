
function sendWhatsapp(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const message = document.getElementById('message').value;
const phonenumber = '5547996394734'

const text = `Hello, my name is ${name}, ${message}`
const formatedmessage = encodeURIComponent(text);

const url = `https://wa.me/${phonenumber}?text=${formatedmessage}`

window.open(url, '_blank', 'noopener,noreferrer');

// Usamos 'noopener,noreferrer' ou 'newWindow.opener = null' para evitar ataques de tabnabbing.
// Sem isso, a aba aberta poderia acessar e manipular a página original via window.opener,
// o que pode levar a redirecionamentos maliciosos ou phishing.
// 'noopener' impede essa referência, e 'noreferrer' também protege a privacidade do usuário,
// evitando que o site destino saiba a origem do link.

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

var typed = new Typed('#typed-text', {
    strings: [
        "Hi there! I'm a full stack developer in training, passionate about solving problems with clean and efficient code. I have a certain knowledge in Python for Data Science and I'm specializing in JavaScript and Node.js to build complete and scalable solutions. My goal is to combine robust back-end systems with modern interfaces to deliver functional and well-designed experiences."
    ],
    typeSpeed: 10,
    backSpeed: 25,
    loop: false
});

// Typed js é uma biblioteca que permite digitar um texto na velocidade que vc configurar!





