const idade = 18
const maiorDeIdade = idade >= 18
const possuiCNh = false

 const podeDirigir = maiorDeIdade && possuiCNh //AND

console.log('Pode dirigir ', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNh //OR

console.log('Pode viajar sozinha ', podeViajarSozinha)

const precisaDeAcompanhanete = !maiorDeIdade
console.log('Precisa de acompanhante ', precisaDeAcompanhanete)

// AND &&
// OR ||
// NOT !
