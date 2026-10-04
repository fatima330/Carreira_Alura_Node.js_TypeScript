// HOF - > Higher - Order Function === funcao que recebe outra funcao como parametro
function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}

function soma(num1, num2){ //esses parametros so existem dentro do escopo da função
    return num1 + num2
}

function divisao(num1, num2){
   return  num1 / num2
}

const resultadoSoma = calcular(3,8, soma)
console.log('Resultado da soma, ', resultadoSoma)

const resultadoDivisao = calcular(32, 8, divisao)
console.log('Resultado da divisao, ', resultadoDivisao)






