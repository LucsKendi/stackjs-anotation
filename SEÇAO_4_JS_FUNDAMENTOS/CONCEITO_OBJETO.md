## Object

Criado com “{ }”

Coleção de chave e de um valor. Pode-se criar um objeto dentro de objeto

ex: Objeto **produtos**, dentro dele objeto **Categoria**

Nesse exemplo, cria-se um objetivo vazio ({ }) e se atribui os valores depois.

```jsx
const prod1 = {}
prod1.nome = 'nintendo switch'
/* criou-se objeto vazio e na segunda linha se identifica 
que havera um identificador chamado "nome", e se atribuiu valor a ele
*/
prod1.preco = 3000.90
prod1['Desconto final de ano'] = 0.40
```

******************NÃO É A MESMA COISA QUE JSON.******************

**************************************Json é um formato textual de objeto.**************************************

Nesse outro exemplo, se cria o objeto com as propriedades definidas:

```jsx
const prod2 = {
    nome: 'OLED',
    preco: 3100.90,
		desconto: 0.40
}

console.log(prod2)
```