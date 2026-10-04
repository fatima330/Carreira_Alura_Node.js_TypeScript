// contar quantos numeros pares e quantos numero impares nos tems entre 0 e 100

// let totalNumerosPares = 0
// let totalNumerosImpares = 0

// // laco de repeticao

// for (let contador = 0; contador <= 100; contador++ ){
//     if(contador % 2 == 0){
//         totalNumerosPares++
//     }else{
//         totalNumerosImpares++
//     }
// }
// console.log('Total de numeros pares:', totalNumerosPares)
// console.log('Total de numeros impares:', totalNumerosImpares)

let fahrenheit = 0

for(let celsius = 0; celsius <= 100; celsius += 10){
    let fahrenheit = celsius * 9 / 5 + 32

     console.log(`${celsius}°C = ${fahrenheit}°F`)
}

let numero = 5
let fatorial = 1

for (let i = numero; i >= 1; i--) {
    fatorial = fatorial * i
}

console.log('Fatorial:', fatorial)


let numeroo = 5
let fatoriall = 1
let i = numero

while (i >= 1) {
    fatorial = fatorial * i
    i--
}

console.log('Fatorial:', fatorial)

let anterior = 1
let atual = 2
let proximo = 0

for(let i = 0 ; i <= 10; i++){
  console.log('resultado: ', proximo)
  anterior = atual
  atual = proximo
}

let num = 4821
let soma = 0

while (num > 0) {
    let digito = num % 10
    soma = soma + digito
    num = Math.floor(num  / 10)
}
console.log('Resultado da soma dos digitos: ', soma)


let altura = 5
let linha = ""

for(let i = 1; i <= altura; i++){

    linha = linha + "*"
    console.log(linha)
}

let alturaa = 5;

for (let i = 1; i <= alturaa; i++) {
  let linha = "";

  for (let j = 1; j <= i; j++) {
    linha = linha + "*";
  }

  console.log(linha);
}


for (let i = 0; i < 5; i++) { 

console.log(i); 

} 

// Resultado: 0, 1, 2, 3, 4


// Você pode mover a expressão de incremento para dentro do corpo do laço:

for (let i = 0; i < 5;) { 

console.log(i); 

i++; 

} 

// Resultado: 0, 1, 2, 3, 4 


// Quando usar cada variante?
// Laço tradicional: Use quando souber exatamente quantas vezes precisa executar o bloco.

// Laço com múltiplas variáveis: Utilize quando precisar controlar múltiplas condições ao mesmo tempo.

// Laço com partes omitidas: Use com cautela e somente quando fizer sentido específico para seu cenário.
console.log('-------------------------------------')

for(let i = 0; i >= 10;){
     console.log('numeros ate 10 impressos',i); 

     i++; 
}

 let totalNumerosPares = 0
 let totalNumerosImpares = 0

// laco de repeticao

 for (let contador = 0; contador <= 20; contador++ ){
     if(contador % 2 == 0){
        totalNumerosPares++
    }else{
        totalNumerosImpares++
     }
 }

 console.log('Numeros pares:', totalNumerosPares) 
 console.log('Numeros impares:', totalNumerosImpares)


let palavra = "casa"

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i])
}



while(contador <= 10){ //primeiro verifica se falso nao entra no bloco de codigo
 console.log('Numero atual: ', contador)
 contador++
}

let numerooo = 1
do { //faz primeiro depois verifica, executa pelo menos uma vez mesmo que seja falsa
    console.log('Numero atual: ', numerooo)
    numerooo++
}while(numerooo <= 10)



  



















