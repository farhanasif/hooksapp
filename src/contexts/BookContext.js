import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', id: 1},
    {title: 'the way of kings', id: 2},
    {title: 'the final empire', id: 3},
    {title: 'the hero of ages', id: 4}
  ]);

  const addBook = (title) => {
    setBooks([...books, {title}])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;