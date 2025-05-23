
document.addEventListener('DOMContentLoaded', function () {
    console.log('Theme switcher pronto');

    // Cria ou seleciona o elemento <link> de estilo
    let themeLink = document.querySelector('link[rel="stylesheet"]');
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme-style';
        document.head.appendChild(themeLink);
    } else {
        themeLink.id = 'theme-style';
    }

    // Recupera tema salvo ou define padrão
    let theme = localStorage.getItem('theme') || 'white';
    setTheme(theme);

    // Detecta clique nos círculos de cor
    const themes = document.querySelectorAll('[data-mode]');
    themes.forEach(btn => {
        btn.addEventListener('click', function () {
            const mode = this.dataset.mode;
            setTheme(mode);
        });
    });

    function setTheme(mode) {
        if (mode === 'blue') {
            themeLink.href = 'blue.css';
        } else if (mode === 'gray') {
            themeLink.href = 'gray.css';
        } else if (mode === 'white') {
            themeLink.href = 'white.css';
        } else {
            console.warn('Tema não encontrado:', mode);
            return;
        }

        localStorage.setItem('theme', mode);
        console.log('Tema aplicado:', mode);
    }
});


