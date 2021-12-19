# Methods of JavaScript
slice(inicio, fim) -> "fatia o array" : recebe a posição de ínicio e a posição final para particionar o array.

splice(inicio, qtd, elementos ) -> "emenda o array" : recebe posição de inicio e quantidade de posições a serem substituidas "emendadas" e por fim os elementos.

indexOf(elemento) -> retorna o índice do elemento buscado.

push(elemento) -> insere elemento no final do array

forEach(callback(valorAtual, optIndex, optArray)(currentValue [, index [, array]])[, thisArg]) -> executa uma função callback para cada elemento do array, mas não tem retorno.

map(callback(valorAtual, indice, array)[, thisArg]) -> executa uma função callback para cada elemento do array, e retorna um novo array modificado.

filter(callback(elemento, index, array)[, thisArg]) -> cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

reduce (callback(acumulador, valorAtual, index, array) -> executa uma função reducer para cada elemento e retorna o resultado da função como um único valor.