import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const { dispatch } = useContext(BookContext);
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
              onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
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