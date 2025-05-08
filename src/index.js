import './styles/index.css'

const hello = () => console.log(`Funciona!`);

hello()

document.addEventListener('DOMContentLoaded', function () {
    // Definição da função toggleTheme
    function toggleTheme() {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    }

    // Verificando o tema salvo no localStorage e aplicando
    (function () {
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light');
        }
    })();

    // Certificando-se de que o botão de alternar tema está presente
    const themeToggleButton = document.querySelector('#theme-toggle-button');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
