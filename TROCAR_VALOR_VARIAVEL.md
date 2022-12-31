## Trocando valor de variável em JS
```jsx
let a = 7;
let b = 94;

//cria variavel temporaria para atribuir valor.
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
```

### Outra forma mais simples, no JS, é a seguinte:

```jsx
let a = 7;
let b = 94;

[a , b] = [b , a];

console.log(a);
console.log(b);
```