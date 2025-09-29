const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"],
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"],
  },
];

//Desafio 1 Extraia e imprima apenas o nome e a cidade do primeiro usuário usando destructuring.
const { nome, cidade } = usuarios[0];

console.log(`Nome: ${nome}, Cidade: ${cidade}`);

//Desafio 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário. Use o spread operator. (Novo usuário: { nome: "Ana", cidade: "Manaus", ... })
const uruarioDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    idade: 20,
    email: "Ana@gmail.com",
    cidade: "Manaus",
    interesses: ["Jogos, Musicas, Praia"],
  },
];

console.log(uruarioDoNorte);

// Desafio 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email "bia.dev@exemplo.com". Use o spread operator.

const beatrizAtualizada = {...usuarios[1], email:"bia.dev@exemplo.com"}

console.log(beatrizAtualizada)


// Desafio 4: Crie uma função `mostrarInteresses(usuario)` que use destructuring no parâmetro para extrair `nome` e `interesses` e imprima uma frase com eles

 function mostrarInteresses({nome,interesses}) {
    console.log(`Ola meu nome e ${nome} e eu tenho muito interesses em ${interesses}`)
}

mostrarInteresses(usuarios[0])
mostrarInteresses(usuarios[1])
mostrarInteresses(uruarioDoNorte[2])
