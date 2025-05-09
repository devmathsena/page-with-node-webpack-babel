import './styles/index.css'

const hello = () => console.log(`Funciona!`);

hello()

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.querySelector('#theme-toggle-button');

    function setIcon(isLight) {
        if (themeToggleButton) {
            themeToggleButton.textContent = isLight ? 'Trocar tema 🌞' : 'Trocar tema 🌙';
        }
    }

    function toggleTheme() {
        const isLight = document.body.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        setIcon(isLight);
    }

    (function () {
        const savedTheme = localStorage.getItem('theme');
        const isLight = savedTheme === 'light';
        if (isLight) {
            document.body.classList.add('light');
        }
        setIcon(isLight);
    })();

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
