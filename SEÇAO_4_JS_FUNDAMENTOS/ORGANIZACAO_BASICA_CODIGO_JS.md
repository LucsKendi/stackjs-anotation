# Organização básica de um código JAVASCRIPT


<mark>💡 JavaScript é organizado em sentenças de códigos terminados por ponto e vírgula **OU NÃO,** que se organizam em **BLOCOS DE CÓDIGO,** delimitados por chaves.</mark>

### Sentenças

```jsx
console.log("Sentença de código aqui")
console.log("Sentença de código aqui");
//pode-se ou não terminar a sentença com ponto e vírgula.
```

### Blocos

```jsx
{
	{
			console.log("Olá");
			console.log('Mundo') //padrão do curso com aspas simples
	}
}
```

## Comentário em JS

  Uma linha:

```jsx
//Comentário em uma linha apenas
```

Múltiplas linhas:

```jsx
/*
comentário de
multiplas linhas
*/
```

## Var, Let e Const

A nomeação de variáveis é importante para organização e compreensão do código.

<mark>
💡 DIFERENÇA ENTRE VAR E LET SERÁ EXPLICADA PRA FRENTE, MAS POR PRIORIDADE É MELHOR USAR LET.
</mark>

```jsx
var a = 3;
let b = 5;

var a = 40;
console.log(a);
//imprime novo valor de a
let b = 2;
console.log(b);
//dá erro no programa, pode-se só fazer o seguinte:
b = 2;
console.log(a, b);
//certinho

const c = 4;
//constantes não podem ser alteradas de maneira alguma
//devem ser utilizadas sempre que o valor for inalteravel.
```