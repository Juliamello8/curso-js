function mostrar() {
    var txtn = document.getElementById('txtnaci');
    var res9 = document.querySelector('div#res9')
    var naci = txtn;
    if(naci == "Português"){
        res9.innerHTML += `<p>Sua língua nativa é: <strong>${naci}</strong>. Você é <b>Brasileiro</b>! </p>`
    } else{
        res9.innerHTML += `<p>Sua língua nativa é: <strong>${naci}</strong>. Você é <b>Estrangeiro</b>! </p>`
    }
}
