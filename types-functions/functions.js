//FUNCAO SIMPLES
function calculaMdc(num1, num2){
    let resp, aux = maiorNumero(num1, num2);
    while(aux >= 1){
        if ((aux % num1 == 0) && (aux % num2 == 0)){
            resp = aux;
            break;
        }else aux--;
    }
    return resp;
}

//EXPRESSAO DE FUNCAO
const maiorNumero = function(num1, num2){
   const maior = num1 > num2 ? num1: num2 //operador ternário
   return maior;
}

//ARROW FUNCTION
const arrowCalculaMdc = (num1, num2) => {
    let aux = maiorNumero(num1, num2);
    let resp;
    while(aux >= 1){
        if ((aux % num1 == 0) && (aux % num2 == 0)){
            resp = aux;
            break;
        }else aux--;
    }
    return resp;
}

console.log(arrowCalculaMdc(15, 3));