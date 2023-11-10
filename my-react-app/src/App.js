import React from "react";
import { useState } from "react";
import { addBook } from "./books/controllers";

const App = () => {

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [genre, setGenre] = useState('');

const resetForm = () => {
  setTitle('');
  setAuthor('');
  setGenre('');
};

const submitHandler = async (event) => {
  event.preventDefault();

  const book = {
    title: title,
    author: author,
    genre: genre,
  };

  try {
    await addBook(book);
    console.log("Book added successfully!");
    resetForm();
  } catch (error) {
    console.error("Error adding book:", error);
    // Handle the error, show a message, etc.
  }
};

  return (
    <div className="container">
      <h1>Add a book</h1>
    
      <form onSubmit ={submitHandler}>
            <label> Book Title:
                <br></br>
                <input onChange={(event) => setTitle(event.target.value)} />
            </label>
            <br></br>
            <br></br>

            <label> Author:
                <br></br>
                <input onChange={(event) => setAuthor(event.target.value)} />
            </label>
            <br></br>
            <br></br>

            <label> Genre:
                <br></br>
                <input onChange={(event) => setGenre(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <button type='submit'>Click here to add a book</button>
        </form>
    </div>
  );
};

export default App;
