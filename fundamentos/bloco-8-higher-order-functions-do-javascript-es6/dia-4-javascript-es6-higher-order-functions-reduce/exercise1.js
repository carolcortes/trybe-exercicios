// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => (arr.reduce((acc, curr) => acc.concat(curr), []));

// Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = () => {
  const names = books.reduce((acc, book, index, arr) => index === arr.length - 1 ? 
    `${acc} ${book.author.name}.` : `${acc} ${book.author.name},`, '');
  return names.trim();
}

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0) / books.length;

// 4 - Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((acc, book) => acc.name.length > book.name.length ? acc : book);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, curr) => acc + curr.split('')
  .reduce((acc2, curr2) => curr2.toLowerCase() === 'a' ? acc2 + 1 : acc2, 0), 0);

console.log(containsA())
console.log('' + names[0])

// 6- Agora vamos criar um novo array de objetos a partir das informações abaixo, 
// onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAvarege = () => students.map((student, index) => ({ name: student, 
  average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length}));
