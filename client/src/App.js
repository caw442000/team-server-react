import React, { useState } from 'react';
import axios from 'axios';
import BooksForm from './component/BooksForm';
import BooksDisplay from './component/BooksDisplay'

import './App.css';

const App = () => {
  const [ books, setBooks ] = useState([]);

  const getBooks = () => {
    console.log("Button fire")
    axios
    .get(`http://localhost:5000/api/books`)
    .then(res => {
      console.log("the response: ", res.data)
      setBooks(res.data)
    })
    .catch(err => {
      console.log(`${err}`);
    })

  
  }
  return (
    <div className="App">
      <h1>Get Some Books API</h1>
      <BooksForm name = {"Titan"} getBooks = {getBooks}  />
      <BooksDisplay name = {"Titan"} books = {books} />
    </div>
  );
}

export default App;
