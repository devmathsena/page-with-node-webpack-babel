import './styles/index.css'

const hello = () => console.log(`Funciona!`);

hello()

document.addEventListener('DOMContentLoaded', function () {
    function toggleTheme() {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    }

    (function () {
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light');
        }
    })();

    const themeToggleButton = document.querySelector('#theme-toggle-button');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
