let nota1 = 10
let nota2 = 8
let nota3 = 7

let media = nota1 + nota2 + nota3 / 3

console.log('a media é igual a 7: ', media >= 7)

let senha1 = "12345678"
let senha2 = 12345678

let resultado = senha1 == senha2

console.log('as senhas sao iguais: ', resultado)

let totalAulas = 10
let faltas = 3

let limite = totalAulas * 25 / 100

console.log('limite faltas: ', faltas > limite)


let temLogin =true
let temSenha = true

let LoginSenha = temLogin && temSenha
console.log('Tem login e senha ', LoginSenha)


let disponivel = !true
console.log( 'esta disponivel?', disponivel)

let numeroUm = 10
let numeroDois = 5
let paresOuIguais = numeroUm % 2 == 0 && numeroDois % 2 == 0 && numeroUm == numeroDois  
console.log('sao pares ou iguais: ', paresOuIguais)

let resultadoo =  120 * 15 / 100
console.log('15% de 120 é igual a: ' + resultadoo)

let operacao = (2 + 3) * 5 //sem o parentese ele faz primeiro a multiplicação com parentes faz primeiro a soma

console.log('resultado: ' + operacao)

