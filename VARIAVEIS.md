# Trabalhando com dados

## Variáveis

Variáveis são compostas por:

```jsx
//
var quantidade = 10;
//atribuído valor 10 à variável *quantidade
//Pode-se utilizar LET para criar variáveis também, tem diferença
let quantidade = 10; 
//Basicamente --> variável + Identificador = valor atribuído
```

Exemplo prático de uso das variáveis:

```jsx
//Várias linhas de código com valor atribuído manualmente
console.log("Caneta");
console.log(10);
console.log(6.4);
console.log(1.5);
console.log(7.9);
//número literal não precisa das aspas.

//UTILIZANDO-SE DE VARIÁVEIS:
{
    var nome = "Caneta";
    var quantidade = 10;
    var preco = 6.4;
    var imposto = 1.5;
    var precofinal = preco + imposto;
//se atribui valores às variáveis e depois chama a várias no 
//console.log

    console.log(nome);
    console.log(quantidade);
    console.log(preco);
    console.log(imposto);
    console.log(precofinal);
}
```
