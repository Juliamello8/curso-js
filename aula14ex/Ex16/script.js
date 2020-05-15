function Contar(){
    //let a variavel só funciona nesse escopo
    let ini = document.getElementById('inicio') ;
    let fim = document.getElementById('fim');
    let pas = document.getElementById('passo');
    let res = document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = `Conta não efetuada! Há campos em branco.`
    }else {
        res.innerHTML = "Contando: </br> "
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if (p >= 0){
            window.alert('Passo informado inválido! Passo considerado é: 1')
            p=1;
        }
        if( i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`;
            }
        }
        else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}