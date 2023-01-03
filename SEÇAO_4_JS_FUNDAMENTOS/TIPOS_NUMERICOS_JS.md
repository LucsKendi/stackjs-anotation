## Tipos numéricos

### função number

```jsx
const peso1 = 1.0
const peso2 = Number('2.0')
//Number é uma função usada para podermos puxar
//outras ferramentas, como o .isInteger e .toFixed
console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
//Number.isInteger verifica se é um número inteiro
```

### .Tofixed

```jsx
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
/*
toFixed arruma a quantidade de casas a serem mostradas
para números quebrados
OU
*/
```

### .toString e typeof

```jsx
console.log(media.toString())
//para mostrar em string

console.log(media.toString(2))
//para mostrar em binário
console.log(typeof media)
console.log(typeof Number)
//type of mostra o tipo de determinada função ou variável
```

## Alguns cuidados com números

```jsx
console.log(7 / 0)
//retorna INFINITY

console.log("10" / 2)
//transforma string em número

console.log("Show!" * 2)
//algumas repetem a palavra duas vezes, JS não

console.log(0.1 + 0.7)
//nao chega a 0.8 pois adota especificação diferente p/
//ponto flutuante

//console.log(10.toString()) não consegue executar
//pois é número literal, mas em parenteses consegue
console.log((10.345).toFixed(2))
//consegue executar
```