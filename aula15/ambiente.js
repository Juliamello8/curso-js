let num = [5, 8, 2, 9, 3];
num.push(7) //coloca o valor 7 na próxima posição vazia
// num.length é um atributo e não função - mostra qnts elementos tem num

console.log(num);
console.log(`O Vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
num.sort() //coloca todos elementos em ordem crescente
console.log(`Agora o primeiro valor do vetor é ${num[0]}`);

/*for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}*/

for(let pos in num){ //ou seja, para cada posição em num
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

num.indexOf(9) //ele busca o valor 7 no array e responde com a posição
num.indexOf(7) //se não tiver ele responde com -1
