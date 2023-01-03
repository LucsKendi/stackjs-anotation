## Boolean

boolean representa uma “entidade” que pode possuir 2 valores: verdadeiro e falso

JS aceita número/verdadeiro e falso

o **“!” é negação.**

******“!!” duas negações tiram a primeira negação******

```jsx
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
//uma negação atras da outra nega a primeira.
```

Operação lógica:

```jsx
let nome = 'Lucas'
console.log(nome || 'Desconhecido')
/*
pode-se colocar um IF e, se nao receber nome,
retorna desconhecido.
*/
```