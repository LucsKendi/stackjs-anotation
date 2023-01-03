## Tipo de uma variável

Usa-se **typeof** no **console.log();** para verificar.

Observe:

```jsx
let idade = 31;
console.log(typeof 31);
console.log(typeof idade);
//number

let salario = 4578.32;
console.log(typeof salario);
/*number, no JavaScript é number, independente do 
ponto flutuante
*/

let EstaChovendo = true //ou false
console.log(typeof EstaChovendo);
//boolean -> Verdadeiro ou falso

console.log(typeof "Teste");
//string -> sequência de caracteres
```

 

### Const
Uma variável **VAR** e uma **LET** podem se alterar, como no exemplo:

```jsx
let a = 3;

a = a + 10;

console.log(a);
//dando o resultado 13.
```

Pode-se usar a **CONST (constante)** que não se altera, impedindo a mudança de valor e gerando erro. 
</br>

**Exemplo:**

```jsx
const a = 3;

//a = a + 10; não funciona se for const

console.log(a);
```