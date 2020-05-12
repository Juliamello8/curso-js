function Contar(){
    //let a variavel só funciona nesse escopo
    let i = document.getElementById('inicio') ;
    let f = document.getElementById('fim');
    let p = document.getElementById('passo');
    let res = document.getElementById('res');
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('Há campos vazios, favor conferir!');
    }else {
        res.innerHTML = "Contando: "
        if (i.value < f.value) {
            window.alert('Contagem normal!');
            var res = document.createElement('div');
        } else if (f.value < i.value) {
            window.alert('Contagem regressiva!');

        }
    }
}