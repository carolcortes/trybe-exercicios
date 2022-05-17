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

// EX 01
const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// EX 02
// const nameAndAge = () => {
//   let authorAge = {}
//   authorAge = books.map((book) => ({ author: book.author.name, age: book.releaseYear - book.author.birthYear }));
//   authorAge.sort((a, b) => a.age - b.age)
//   return authorAge;
// };

const nameAndAge = () => {
  return (books.map((book) => ({author: book.author.name, age: book.releaseYear - book.author.birthYear}))
    .sort((a, b) => a.age - b.age));
}
console.log(nameAndAge())

// EX 03
const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// EX 04
const oldBooksOrdered = () => {
  return books.filter((book) => book.releaseYear < new Date().getFullYear() - 60 ).sort((a, b) => a.releaseYear - b.releaseYear);
}

// EX 05
const fantasyOrScienceFictionAuthors = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => book.author.name).sort();

// EX 06
const oldBooks = () => books.filter((book) => new Date().getFullYear() - book.releaseYear > 60).map((book) => book.name);

// EX 07
const authorWith3DotsOnName = () => books.find((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.').name;
