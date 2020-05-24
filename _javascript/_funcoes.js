$(document).ready(function () {
    // VARIAVEIS LOCAIS
    var _containerBtn = $(".btn-voltar");
    var _btnLink = $(".btn-voltar-link");
    // MOSTRAR O BOTAO VOLTAR AO TOPO
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            _containerBtn.fadeIn(500);
        } else {
            _containerBtn.fadeOut(0);
        }
    });
    // CLICK E VOLTE AO TOPO
    _btnLink.click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

// Muda Icone Menu
var c = 1;
function mudaIconeMenu() {
    if(c == 1) {
        document.getElementById('iconeMenu').innerHTML = "&#10006;";
    }else if (c == 2){
        document.getElementById('iconeMenu').innerHTML = "&#9776;";
    }
    if (c == 2)c = 0;
    c++;
}
