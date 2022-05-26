function troca() {
    trocaClasse();
    trocaTitulo();
};

function trocaTitulo() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (bory.classList.contains(darkModeClass)) {
        meuBotao.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    meuBotao.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

function trocaClasse() {
    meuBotao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    bory.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

const darkModeClass = 'dark-mode';
const meuBotao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const bory = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

meuBotao.addEventListener("click", troca);