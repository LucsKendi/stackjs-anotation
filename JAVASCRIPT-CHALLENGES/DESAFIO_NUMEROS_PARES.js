/*
Mostre um arranjo de números com 50 elementos (mostrando apenas os pares)
e avisando o usuário toda vez que dez elementos do conjunto se passarem
*/

let arrayInicial = [];
let i = 0;

for (let contagem = 0; contagem <= 50; contagem++) {
    arrayInicial.push(i)
    i = i + 2;

}

let arrayDefinitiva = [];
let aux = 0;
let ajuda = 10;
let aviso = "(" + ajuda + (" ° elemento)");
let valor = "Valor da posição: ";
let espaco = ("  ");

for (pos = 0; pos < arrayInicial.length; pos++) {
    if (aux == 9) {
        let array1 = valor + arrayInicial[pos] + espaco + aviso;
        arrayDefinitiva.push(array1)
        aux = 0;
        ajuda = ajuda + 10;
        aviso = "(" + ajuda + (" ° elemento)");

    } else {
        arrayDefinitiva.push(arrayInicial[pos])
        aux++;
    }
}
console.log(arrayDefinitiva);
