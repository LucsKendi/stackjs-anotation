## Concatenar → Texto + variáveis em console.log


<mark> 💡 **STRING** é uma sequência de símbolos. </mark>


**A concatenação** ocorre quando se utiliza o “**+” (mais)** em meio à variáveis, no console.log

***Exemplo:*** 

```jsx
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
/* Operação matemática na variavel, utilizando duas
variaveis já declaradas.
*/
let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto " + nome
    + ", Categoria " + categoria
    + ", Preço: " + preco 
    + ", Desconto: " + desconto
    + ", Preço com desconto: " + precoComDesconto);
/*Concatenação utilizando-se do "+", juntando a variável
à uma STRING.
*/
```