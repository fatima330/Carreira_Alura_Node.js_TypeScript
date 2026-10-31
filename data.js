const agora = new Date()
console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mes 0-11:', agora.getMonth())
console.log('Dia do mes:', agora.getDate())
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())


const nascimento = new Date('1997-07-18T03:00:00.000Z')

console.log(nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))
