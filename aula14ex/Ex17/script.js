function Gerar(){
    let num = document.getElementById('txtn');
    let res = document.getElementById('res');
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert("Por favor, digite um número!");
    } else{
        let n = Number(num.value);
        let i = 1;
        while (i <= 10) {
            let item = document.createElement('option');
            item.text = `${n} * ${i} = ${n * i}`;
            item.value = `tab${i}`
            tab.appendChild(item);
            i++;
        }
    }

}