import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, addBook, removeBook } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  
  return books.length > 0 ? ( 
    <div className="book-list" //style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li 
              key={book.id} 
              //style={{ background: theme.ui }}
              className="title"
              onClick={() => removeBook(book.id)}
            >{book.title}</li>
          );
        })}
      </ul>
    </div>
  ): (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        No books to read. Hello free time :)
    </div>
  );
}
 
export default BookList;