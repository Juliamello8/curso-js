function calcular() {
    var txtv = document.getElementById('txtvel');
    var res10 = document.querySelector('div#res10')
    var vel = Number(txtv.value);
    if(vel > 60){
        res10.innerHTML += `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h. <b>MULTADO</b> por excesso de velocidade! </p>`
    } else{
        res10.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h.</p>`
    }
    res10.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
