let contador = 1

while(contador <= 10){ //primeiro verifica se falso nao entra no bloco de codigo
 console.log('Numero atual: ', contador)
 contador++
}

let numero = 1
do { //faz primeiro depois verifica, executa pelo menos uma vez mesmo que seja falsa
    console.log('Numero atual: ', numero)
    numero++
}while(numero <= 10)