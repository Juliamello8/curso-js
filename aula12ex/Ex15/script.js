function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fAno.value.length == 0 || Number(fAno.value) > ano ) {
        window.alert('Dados incorretos, verifique e tente novamente!');
    }else{
        var sex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        //criando o elemento img com id=foto
        img.setAttribute("id", "foto");
        if (sex[0].checked) {
            genero = 'Mulher';
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'img/menina.png')
            } else if(idade >=10 && idade<21){
                img.setAttribute('src', 'img/jovemM.png')
            }else if(idade>21 && idade< 50){
                img.setAttribute('src', 'img/adulta.png')
            }else{
                img.setAttribute('src', 'img/idosa.png')
            }
        } else if (sex[1].checked) {
            genero = 'Homem';
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'img/menino.png')
            } else if(idade >=10 && idade<21){
                img.setAttribute('src', 'img/jovemH.png')
            }else if(idade>21 && idade< 50){
                img.setAttribute('src', 'img/adulto.png')
            }else{
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos <b>${genero}</b> com <b>${idade}</b> anos!`
        res.appendChild(img);
    }
}