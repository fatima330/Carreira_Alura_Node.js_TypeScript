// function saudacao( nome) { //nome e um parametro da funcao saudacao - definicao da funcao recebe nome como parametro
//     console.log('Ola,', nome)
// }

// const saudacao = (nome) => {
//     console.log('Vida longa e pospera,', nome)
// } 

const saudacao = nome => console.log('Ola,', nome)

saudacao('Maria') //Maria é o argumento - executa é argumento 


// function calcularDobroDeUm(numero){
//     return numero * 2
// }

const calcularDobroDeUm = (numero) => {
    return numero * 2
}

const numeroDobrado = calcularDobroDeUm(4)
console.log('O dobro de 4 é:', numeroDobrado)


console.log('oi', 'tudo', 'bem', '.')

function dividir(a, b) {
  return a / b;
}

const resultadoDivisao = dividir(32, 8);
console.log(resultadoDivisao); // Exibe undefined









