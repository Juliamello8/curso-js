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
        img.setAttribute('id', 'foto');
        if (sex[0].checked) {
            genero = 'Feminino';
            if (idade >= 0 || idade > 13){
                //criança
                img.setAttribute('src', '/img/menina.png')
            }else if (idade <= 13 || idade > 22){
                img.setAttribute('src', '/img/jovemM.png')
                //jovem
            }else if(idade <= 22 || idade < 60){
                img.setAttribute('src', 'img/adulta.png')
                //Adulto
            }else{
                img.setAttribute('src', 'img/idosa.png')
                //Idoso
            }
        } else if (sex[1].checked) {
            genero = 'Masculino';
            if (idade >= 0 || idade > 13){
                img.setAttribute('src', 'img/menino.png')
                //criança
            }else if (idade <= 13 || idade > 22){
                img.setAttribute('src', 'img/jovemH.png')
                //jovem
            }else if(idade <= 22 || idade < 60){
                img.setAttribute('src', 'img/adulto.png')
                //Adulto
            }else{
                img.setAttribute('src', 'img/idoso.png')
                //Idoso
            }
        }
    }
}