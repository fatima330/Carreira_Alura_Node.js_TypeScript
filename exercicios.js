let anoAtual = 2026
let anoNascimento = 1997

let resultado = anoAtual - anoNascimento
console.log(resultado)

let cidade = 'Bertioga'
let estado = 'sao paulo'
let pais = 'Brasil'
console.log('voce esta em :', cidade, '-' ,estado, '-' ,pais)

let temCarteira = true
console.log(typeof temCarteira)

let saldo = 0
saldo += 200
saldo -= 150

console.log('saldo atual: 0',  'saldo depois de deposito', saldo , 'saldo depois de saque', saldo, 'saldo final', saldo )

let matematica = 6
let portugues = 8
let ciencias = 10

let media = matematica + portugues + ciencias / 3
console.log('media das notas é: ', media)

let salario = 30000
let NovoSalario = 1.10
console.log('Apos aumento de 10% o novo salario é R$ ', NovoSalario)

let cliques = 0
console.log('cliques: ' + cliques)
cliques = 1;
console.log('cliques: ' + cliques)
cliques = 2;
console.log('cliques: ' + cliques)
cliques = 3;
console.log('O boatao foi clicado: ' + cliques + ' vezes ')

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

let mensagem  = 'O numero é: '
let numero = 10
let result = mensagem + numero
console.log(result)
console.log(typeof result)
