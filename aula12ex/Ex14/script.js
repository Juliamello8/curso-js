function Carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#FEE660';
        document.querySelector('header').style.color = '#333';
        document.querySelector('footer').style.color = '#333';
    }else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#C99F8A'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#111827'
    }
}