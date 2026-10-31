let maria1 = {
    nome: 'Maria',
    idade: 29,
    profissao: 'analista de sistemas'
}

const maria2 = { ...maria1 }

maria2.idade = 30

console.log(maria1)
console.log(maria2)

maria1 = {
    ...maria2,
    profissao: 'Analista senior',
    possuiCNH: true
}

console.log(maria1)

const { nome, ...restante } = maria1

console.log(nome)
console.log(restante)


function criarLivro(titulo, autor){
    return {titulo, autor}
}

const livro = criarLivro('Duna', 'Frank Hebert')

// const livro = new livro('Duna', 'Frank Herbert')
// console.log(livro instanceof Livro)


