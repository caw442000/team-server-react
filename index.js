const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors())

const PORT = 5000;

let books = [
  {
    id: 1, 
    title: 'The Prequel',
    year: 1975
  },
  {
    id: 2, 
    title: 'Birth of a Legend',
    year: 1982

  },
  {
    id: 3, 
    title: 'The Fall of A Titan',
    year: 2018

  }
];

server.get(`/api/books`, (req, res) => {
  res.status(200).json(books);

})

server.listen(PORT, () => console.log(`\n server is listening on ${PORT} \n`));
