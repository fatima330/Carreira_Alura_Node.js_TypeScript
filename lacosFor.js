
// estrutura do laco for

for(let contador = 1; contador <= 5; contador ++){
 console.log('Numero atual:', contador)
}

for(let numero = 0; numero <= 15; numero++){
  if(numero % 2 == 0){
    console.log('Numero par encontrado:', numero)
  }
}

const palavra = 'maria'
// palavra.lenght indica quantos caracteres uma string possui  
// palavra[1] - pega a letra na posição indicada

for(let cont = 0; cont <= palavra.length; cont++){
  console.log(palavra[cont])
}