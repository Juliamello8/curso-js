function Gerar(){
    let num = document.getElementById('num');
    let res = document.getElementById('res');

    if (num >= 0){
        // for (let i = 0; i <= 10; i++){
        //     let result = num * i; 
        //     res.innerHTML = `${result}`;
        // }
        window.alert("Tudo ok!")
    } else if (num < 0){
        window.alert("Não é possível calcular número negativo!");
    } else if (num == NaN || num == null){
        window.alert("Favor preencher campo!");
    }

}