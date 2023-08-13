var menuButton = document.querySelector('#menu');
var menuItens = document.querySelector('#lista-itens');


menuButton.addEventListener('click', clicar);

window.addEventListener('resize', tamanho)

function clicar() {
    if (menuItens.style.display == 'block') {
        menuItens.style.display = 'none';
    } else {
        menuItens.style.display = 'block';
    }
}

function tamanho () {
    if (window.innerWidth >= 768) {
        menuItens.style.display = 'none';
    } else {
        menuItens.style.display = 'none';
    }  
    
}
tamanho();
